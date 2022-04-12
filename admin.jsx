/**create a component (Admin)
register the url   /Admin
register a menu item for item

Form: title image price category buttontosave buttontoclear**/

// change check 3

import "./admin.css";
import {useState, useEffect} from 'react';
import DataService from "../services/dataService";



const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon,setCoupon] = useState({});
  const [allCoupons,setAllCoupons] = useState([]);
  const [allProds,setAllProds] = useState([]);
  // allCoupons (above)


  const handleInputChange = (e) => {
    var copy = { ...prod };
    copy[e.target.name] = e.target.value;
    setProd(copy);
  };

  const [change, setChange] = useState({});

  const handleCCChange = (e) => {
    var copy = { ...coupon };
    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  };

  const saveProduct = () => {
    console.log(prod);
 
    let service = new DataService();
    service.saveProduct(prod);

    let copy = [ ...allProds ];
    copy.push(prod);
    setAllProds(copy);

  };

  const loadCoupons = async() => {
    let service = new DataService();
    let all = await service.getCoupons();
    setAllCoupons(all);
  };

  // when the comp. loads...
  useEffect(() =>{
    loadCoupons();
  }, []);

  const saveCoupon = async () => {
    console.log(coupon);

    let fixed = {...coupon};
    fixed.discount = parseInt(coupon.discount); //change the discount to integer
    console.log(fixed)
    let service = new DataService();
    let resp = await service.saveCouponCode(fixed);

    // add it to the allCoupons
    let copy = [ ...allCoupons ];
    copy.push(coupon);
    // copy[e.target.name] = e.target.value; ---not needed !?!
    setAllCoupons(copy);
  }



  return (
     <div className="admin">
      <section>
        <h3>Register New Product</h3>

        <div className="form">
          <div className="my-control">
            <label>Title:</label>
            <input onChange={handleInputChange} name="title" type="text"></input>
          </div>

          <div className="my-control">
            <label>Image:</label>
            <input onChange={handleInputChange} name="image" type="text"></input>
          </div>

          <div className="my-control">
            <label>Category:</label>
            <input onChange={handleInputChange} name="category" type="text"></input>
          </div>

          <div className="my-control">
            <label>Price</label>
            <input onChange={handleInputChange} name="price" type="text"></input>
          </div>

          <div className="my-control">
            <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>


          </div>
        </div>

        <div className="prod-list">
          {allProds.map((prod, index) => (
            <div key={index}>
              
              <label>{prod.title}</label> - $<label>{prod.price}</label>
            </div> 
          ))}
        </div>

      </section>

      <section>
        <h3>Coupon Codes</h3>

        <div className="form">

          <div className="my-control" >
            <label>Code:</label>
            <input onChange={handleCCChange} name="code" type="text" />
          </div>

            <div className="my-control" >
            <label>Discount:</label>
            <input onChange={handleCCChange} name="discount" type="text" />
          </div>

          <div className="my-control">
            <button onClick={saveCoupon } className="btn btn-dark">Save Coupon Code</button>
          </div>
        </div>

        <div className="coupon-list">
          {allCoupons.map((coupon, index) => (
            <div key={index}>
              <label>{coupon.code}</label> - <label>{coupon.discount}</label> %<label></label>
            </div> 
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admin;
