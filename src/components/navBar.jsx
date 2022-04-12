
import './navBar.css';
import { Link } from "react-router-dom";
import store from "../context/storeContext";
import { useContext } from "react";


const NavBar = () => {
  const cart = useContext(store).cart; //read cart form context
  
  const getNumber = () => {
    // sum all the quantity (s) in the array
    // and return the total
    let total = 0;
    for(let i=0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity;
    }

    return total;
    // return cart.length;
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">Art Venue</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart" className="btn     btn-outline-light"> 
              <span className="badge bg-primary"></span>{getNumber()} View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

