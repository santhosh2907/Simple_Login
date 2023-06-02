import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

function ShopDetails({match}) {

    let { id } = useParams();

    useEffect (() =>{
        fetchItem();
        console.log(id);
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://dummyjson.com/products/${id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    }

  return (
    <div className="about-page">
        
     <h2>{item.brand}-{item.category}</h2>
     <img src={item.thumbnail} alt='product' />
     <p><b>$</b> - {item.price}</p>
     <p><b>Description</b> - {item.description}</p>
     <p><b>Price</b> - {item.price}</p>
     <p><b>Rating</b> - {item.rating}</p>

    </div>
  );
}

export default ShopDetails;