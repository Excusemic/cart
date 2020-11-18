export const reducer = (state, action) => {
  let { payload } = action
  if (action.type === "DATA_UPDATE") {
    let amountArr = payload.data.map((elem) => {
      return elem.amount
    })
    let totalArr = payload.data.map((elem) => {
      return Number(elem.price)
    })
    let amount = amountArr.reduce((a, b) => a + b)
    let total = totalArr.reduce((a, b) => a + b)
    return { ...payload, amount, total }
  }
  if (action.type === "INCREASE") {
    let itemID = payload
    let item = state.data.filter((elem) => elem.id === itemID)
    let newTotal = state.total + Number(item[0].price)
    let newAmount = state.amount + 1
    let newCards = state.data.map((item) => {
      if (item.id === itemID) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, data: newCards, amount: newAmount, total: Number(newTotal.toFixed(2)) }
  }
  if (action.type === "DECREASE") {
    let itemID = payload
    let chosenItem = state.data.filter((elem) => elem.id === itemID)
    let newTotal = state.total
    let newAmount = state.amount
    let newCards = state.data.map((item) => {
      if (item.id === itemID) {
        if (item.amount > 1) {
          newAmount = state.amount - 1
          newTotal = state.total - Number(chosenItem[0].price)
          return { ...item, amount: item.amount - 1 }
        } else {
          return item
        }
      }
      return item
    })
    return { ...state, data: newCards, amount: newAmount, total: Number(newTotal.toFixed(2)) }
  }
  if (action.type === "REMOVE_ITEM") {
    let itemID = payload
    let item = state.data.filter((elem) => elem.id === itemID)
    let newTotal = state.total - Number(item[0].price)
    let newAmount = state.amount - item[0].amount
    let newCards = state.data.filter((elem) => elem.id !== itemID)

    return { ...state, data: newCards, amount: newAmount, total: Number(newTotal.toFixed(2)) }
  }
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, data: null, amount: 0, total: 0 }
  }
}
