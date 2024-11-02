import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)
  function Cart(){
    setCart((inCart)=>!inCart)}
  
  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={Cart} className={inCart ? "remove" : "add"} >{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
