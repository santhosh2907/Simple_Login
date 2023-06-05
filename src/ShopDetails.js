import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import { Link } from "react-router-dom";

function ShopDetails({ match }) {
  let { id } = useParams();

  useEffect(() => {
    fetchItem();
    console.log(id);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://dummyjson.com/products/${id}`);
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div className="about-page">
      <Header />
      {/* <h2>{item.brand}-{item.category}</h2>
     <img src={item.thumbnail} alt='product' />
     <p><b>$</b> - {item.price}</p>
     <p><b>Description</b> - {item.description}</p>
     <p><b>Price</b> - {item.price}</p>
     <p><b>Rating</b> - {item.rating}</p> */}
      <div className="centered-card">
        <div className="card">
          <img src={item.thumbnail} className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">{item.brand}-{item.category}</h5>
            <p className="card-text">
            {item.description}
            </p>
            <p><b>Price</b> - {item.price}</p>
            <p><b>Rating</b> - {item.rating}</p>
            
              <p><Link to={`/`}>Go Back</Link></p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetails;
