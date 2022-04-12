import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";


const Cart = () => {

  let {cart, addProdToCart} = useContext(store);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-item-box">
        <h4>Here are the items you've chosen so far:</h4>

        <div className="products">
          {cart.map((prod) => ( 
            /**<div className="product"> 
              <h5>{prod.title}</h5> 
            </div> **/
            <ProductInCart className="product" key={prod._id} data={prod}></ProductInCart>
          ))}
        </div>
      </div>

      <div className="cart-page">
        <h3>Let's finish the order!!!</h3>
        <h5>Are you ready to pay for the {cart.length} items in the cart?!?</h5>
      </div>



    </div>
  );
};

export default Cart;

/**<div className="coupon-list">
{allCoupons.map((coupon, index) => (
  <div key={index}>
    <label>{coupon.code}</label> - <label>{coupon.discount}</label>
  </div> **/