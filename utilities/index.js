// import {useAppState} from '../context'
// const {cart} = useAppState()

const calculateNumberOfCartElements = cart => {
  let total = 0
  cart.forEach(element => {
    total += element.quantity
  })
  return total
}

const calculateTotalPrice = cart => {
  let totalPrice = 0
  cart.forEach(element => {
    totalPrice += element.quantity * element.price
  })
  return totalPrice.toFixed(2)
}

const findElement = (cart, addedProductId) => {
  const isProductInState = cart.some(element => element.id === addedProductId)
  return isProductInState
}

// const findElement = state => {
//   const innerFunction = addedProductId => {
//     return state.some(element => element.id === addedProductId)
//   }
//   return innerFunction
// }

// const foundElement = findElement(cart)

export {calculateNumberOfCartElements, calculateTotalPrice, findElement}
