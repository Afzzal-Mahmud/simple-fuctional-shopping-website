import React, { useEffect, useState } from "react";
import { getDataFromStorage, storeData as storeDataToLocalStorage } from "../../Data/localStorage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Hero.css";
//because of React Unidirectional data process so 
//we can pass data parent to child so state is declare Hero
//component and we pass thows data on to product and cart 
function Hero() {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    const addToCartHendler = (productObject)=>{
        const newCart = [...cart,productObject];
        setCart(newCart)
        storeDataToLocalStorage(productObject.key)
    }

    useEffect(()=>{
        fetch('../../../products.JSON')
        .then(Response => Response.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const savedCartObject = getDataFromStorage();
        const stordNewCartArray = []
        if(products.length){
            for(const key in savedCartObject){
                const addedProductObject =products.find(product => product.key
                    ===key);
                    console.log(addedProductObject)
                    if(addedProductObject){
                        const quantityNew = savedCartObject[key]
                        addedProductObject.quantity = quantityNew;
                        stordNewCartArray.push(addedProductObject)
                        // console.log('object with added quantity',addedProductObject)
                    }
             }
             setCart(stordNewCartArray);
        }
        
    },[products])


    return( 
       <>
       <div className="input-container">
           <input type="text" placeholder="enter your product name"/>
       </div>
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
       </>
    )
}
export default Hero;