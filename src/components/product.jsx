import './product.css';
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import store from '../context/storeContext';

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addProdToCart = useContext(store).addProdToCart;
  
  const onQuantityChange = (value) =>{
    console.log("Quantitiy Changed to:", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
  }

  const getPrice = () => {
    let price = props.data.price;
    return "$" + price.toFixed(2);
  }

  const addProduct = () => {
    // create an obj
    let cartProd = {...props.data };
    cartProd.quantity = quantity;

    addProdToCart(cartProd);
  }

  return (<div className='product'>
            <h5>These are our amazing products!</h5>
            <img src={"/imgs/"+props.data.image} alt="product iamge"></img>
            <h2> {props.data.title} </h2>
            <label className='price'> {getPrice()} </label>
            <label className='total'> Total: {getTotal()}</label>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button onClick={addProduct} className='addBtn'>Add</button>
          </div>);
};


export default Product;