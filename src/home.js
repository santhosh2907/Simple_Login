import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";

function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const items = await data.json();
    // console.log(items.products);
    setItems(items.products);
  };

  return (
    <div className="about-page">
      <Header />
      {/* {items.map(item => (
            <div key={item.id}>
                <h2 key={item.id}>Brand: <Link to={`/shop/${item.id}`} >{item.brand}</Link></h2>
            </div>
      ))} */}
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="card">
                <img src={item.thumbnail} className="card-img-top" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{item.brand}</h5>
                  <p className="card-text">
                    {item.description.slice(0, 45)}...
                  </p>
                  <Link to={`/shop/${item.id}`}>
                    <p className="btn btn-primary">Know More</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
