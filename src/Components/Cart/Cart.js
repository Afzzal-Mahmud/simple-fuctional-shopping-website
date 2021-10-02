import React from "react";
function Cart(props) {
    const {carts}= props;
    let totalQuantity = 0
    let total = 0;
    for(const productObject of carts){
        if(!productObject.quantity){
            productObject.quantity = 1
        }
        total = total + productObject.price * productObject.quantity;
        totalQuantity = totalQuantity + productObject.quantity
    }
    return(
        <>
            <h4>Total Product :{totalQuantity} </h4>
            <h3>Total Price : {total.toFixed(2)}</h3>
            {props.children}
        </>
    )           
}
export default Cart;