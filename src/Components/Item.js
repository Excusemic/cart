import React from "react"
import PropTypes from "prop-types"
import { useGlobalContext } from "../context"
const Item = ({ title, img, price, amount, id }) => {
  const { decreaseAmount, increaseAmount, removeItem } = useGlobalContext()
  return (
    <div className="item">
      <div className="info">
        <div className="image-container">
          <img src={img} alt={title} />
        </div>
        <div>
          <div className="info-price">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>

          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      </div>
      <div className="amount-container">
        <button onClick={() => increaseAmount(id)} className="amount-change">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount-text">{amount}</p>
        <button onClick={() => decreaseAmount(id)} className="amount-change">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}
Item.defaultProps = {
  title: "unavailable",
  price: "ask for price",
  amount: 0,
  img: "https://pdsohio.com/wp-content/uploads/2017/04/default-image.jpg",
}
export default Item
