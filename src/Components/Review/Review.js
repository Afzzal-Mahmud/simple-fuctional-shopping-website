import React from "react";
import { useHistory } from "react-router";
import { removeFromDb } from "../../Data/localStorage";
import getProduct from "../../Js/loadData";
import useCart from "../../Js/useCart";
import Cart from "../Cart/Cart";
import ReviewProduct from "./ReviewProduct";

function Review() {
    const [products] = getProduct()
    const [cart,setCart] = useCart(products)
    const history = useHistory()
    //btn for remove to cart 
    const removeItem = (key)=>{
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart)
        removeFromDb(key)
    }

    const placeOrder = ()=>{
        //using setCart hook we remove the shopping data from ui
        //also remove from local storage and go to ThumbsUp components
        setCart([])
        localStorage.removeItem('shopping-cart');
        history.push("/thumbsup")
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
            <Cart carts={cart}>
                <button 
                style={{marginLeft:"70px"}} 
                className="cart-btn"
                onClick={placeOrder}>Place Order</button>
            </Cart>
        </div>
    </div>
    )
}
export default Review;