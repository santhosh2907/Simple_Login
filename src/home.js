import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

function Home() {

    useEffect (() =>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const items = await data.json();
        console.log(items.products);
        setItems(items.products);
    }

  return (
    <div className="about-page">
      {items.map(item => (
            <div>
                <h2 key={item.id}>Brand: <Link to={`/shop/${item.id}`} >{item.brand}</Link></h2>
            </div>
      ))}
    </div>
  );
}

export default Home;