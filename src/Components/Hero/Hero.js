import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
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
    //product already localStorage a thakar karone product ke find kore tar ager quantity er 
    //sate amra 1 jug kore disi abong oita bade baki je product ase oigular kuno poriborton 
    //hove na ar notun product add korle tar quantity amra 1 set kore dibo
    const addToCartHendler = (productObject)=>{

        const exist = cart.find(product => product.key ===productObject.key);
        let newCart =[];

        if(exist){
            const restProduct = cart.filter(product=>product.key !== productObject.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...restProduct,productObject]
        }else{
            productObject.quantity = 1;
            newCart = [...cart,productObject];
        }
        setCart(newCart)

        //save to local storage
        storeDataToLocalStorage(productObject.key)
    }

    useEffect(()=>{
        fetch('../../../products.JSON')
        .then(Response => Response.json())
        .then(data => {
            setProducts(data);
            //first of all the search result is empty thats why the 
            //length is 81 ; it is the 
            setMatchedResult(data)
        })
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
//hendelChange useState 
    const[matchedResult,setMatchedResult]= useState([])
    const hendelInputChange = (e)=>{
        const searchProduct = e.target.value;
        const matchedProduct = products.filter(product => 
            product.name.toLowerCase().includes(searchProduct.toLowerCase()))
            // console.log('from line 55 default array length is 81 thats why it show the all result',matchedProduct.length)
        setMatchedResult(matchedProduct)
    }

    return( 
       <>
       <div className="input-container">
           <input onChange={hendelInputChange} type="text" placeholder="enter your product name"/>
       </div>
        <div className="container grid">
            <div className="products-container">
                {
                   matchedResult.map(product => <Product 
                                 productsObject={product}
                                 addToCart={addToCartHendler}
                                 key={product.key}
                                 ></Product> )
                }
            </div>
            <div className="cart-item">
                <Cart carts={cart}>
                    <NavLink style={{textDecoration:"none"}} to="./review">
                        <button style={{marginLeft:"67px"}} className="cart-btn">Review Order</button>
                    </NavLink>
                </Cart>
            </div>
        </div>
       </>
    )
}
export default Hero;