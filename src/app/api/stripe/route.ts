import {NextResponse} from 'next/server'
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

export const POST = async (request: Request) => {
  const cart: ProductType[] = await request.json()
  let activeProducts = await getActiveProducts()
  let stripeItems = []

  try {
    for (const product of cart) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() === product?.title?.toLowerCase(),
      )
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

  for (const product of cart) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.title?.toLowerCase(),
    )

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      })
    }
  }

  return NextResponse.json({data: cart})
}
