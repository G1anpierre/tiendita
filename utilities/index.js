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

const findElement = (state, addedProductId) => {
  const isProductInState = state.some(element => element.id === addedProductId)
  return isProductInState
}

export {calculateNumberOfCartElements, calculateTotalPrice, findElement}
