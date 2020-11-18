import React from "react"
import { useGlobalContext } from "../context"
import Item from "./Item"

const Cart = () => {
  const { total, data, clearItems, amount } = useGlobalContext()
  return (
    <div className="cart-content">
      <h1>Your bag</h1>
      {amount === 0 ? (
        <p>Your cart is empy</p>
      ) : (
        data.map((item) => {
          return <Item key={item.id} {...item} />
        })
      )}
      {amount > 0 && (
        <button onClick={() => clearItems()} className="clear-btn">
          Clear
        </button>
      )}
      <hr></hr>

      {total > 0 && (
        <div className="total">
          <p>Total:</p>
          <p>{`$${total}`}</p>
        </div>
      )}
    </div>
  )
}

export default Cart
