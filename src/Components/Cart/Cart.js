import React from "react";
function Cart(props) {
    const {carts}= props;
    let total = 0;
    for(const productObject of carts){
        total = total + productObject.price;
    }
    return(
        <>
            <h4>Total Product :{props.carts.length} </h4>
            <h3>Total Price : {total.toFixed(2)}</h3>
        </>
    )           
}
export default Cart;