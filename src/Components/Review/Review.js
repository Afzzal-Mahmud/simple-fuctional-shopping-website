import React from "react";
import { removeFromDb } from "../../Data/localStorage";
import getProduct from "../../Js/loadData";
import useCart from "../../Js/useCart";
import Cart from "../Cart/Cart";
import ReviewProduct from "./ReviewProduct";

function Review() {
    const [products] = getProduct()
    const [cart,setCart] = useCart(products)

    //btn for remove to cart 
    const removeItem = (key)=>{
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart)
        removeFromDb(key)
    }

    return (
        <div className="container grid">
        <div className="products-container">
            <h1>welcome to reating</h1>
         {
             cart.map(product => <ReviewProduct
             key={product.key}
             productObject = {product}
             removeItem={removeItem}
             ></ReviewProduct>)
         }
        </div>
        <div className="cart-item">
            <Cart carts={cart}></Cart>
        </div>
    </div>
    )
}
export default Review;