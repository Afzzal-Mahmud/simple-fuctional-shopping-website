import React from 'react';

function ReviewProduct(props) {
    const { name, category, price, quantity, key } = props.productObject;
    const {removeItem} = props;
    return (
        <div style={{padding:"2em 0"}}>
            <h3>Name: {name} </h3>
     
                <h4>Price : {price} </h4>
                <h4>Quantity : {quantity} </h4>

            <h5>Catagori : {category} </h5>
            <button className="cart-btn" onClick={()=>removeItem(key)}>Remove-Item</button>
        </div>
    )
}
export default ReviewProduct;