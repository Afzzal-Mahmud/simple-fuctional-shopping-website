import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Hero.css";
//because of React Unidirectional data process so 
//we can pass data parent to child so state is declare Hero
//component and we pass thows data on to product and cart 
function Hero() {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    const addToCartHendler = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart)
    }

    useEffect(()=>{
        fetch('../../../products.JSON')
        .then(Response => Response.json())
        .then(data => setProducts(data))
    },[])

    return(
        <div className="container grid">
            <div className="products-container">
                {
                    products.map(product => <Product 
                                 productsObject={product}
                                 addToCart={addToCartHendler}
                                 key={product.key}
                                 ></Product> )
                }
            </div>
            <div className="cart-item">
                <Cart carts={cart}></Cart>
            </div>
        </div>
    )
}
export default Hero;