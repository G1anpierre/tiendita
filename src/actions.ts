'use server'
import {redirect} from 'next/navigation'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})
const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list()
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true,
  )
  return availableProducts
}

export const checkoutStripe = async (products: ProductType[]) => {
  let activeProducts = await getActiveProducts()

  try {
    for (const product of products) {
      const stripeProduct = activeProducts?.find((stripeProduct: any) => {
        return (
          stripeProduct?.name?.toLowerCase().trim() ===
          product?.title?.toLowerCase().trim()
        )
      })
      if (!stripeProduct) {
        await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: 'usd',
          },
        })
      }
    }
  } catch (error) {
    console.error('Error in creating a new product', error)
    throw error
  }

  activeProducts = await getActiveProducts()
  let stripeItems: any = []

  for (const product of products) {
    const stripeProduct = activeProducts?.find(
      (prod: any) =>
        prod?.name?.toLowerCase().trim() ==
        product?.title?.toLowerCase().trim(),
    )

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      })
    }
  }

  const stripeSession = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: 'payment',
    payment_method_types: ['card'],
    submit_type: 'pay',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    expires_at: Math.floor(Date.now() / 1000) + 3600 * 2,
  })

  if (stripeSession?.url) {
    redirect(stripeSession?.url)
  }
}
