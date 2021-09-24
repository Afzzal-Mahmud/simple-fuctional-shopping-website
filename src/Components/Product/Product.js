import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart ,faStar} from '@fortawesome/free-solid-svg-icons';
import StarRatingComponent from "react-star-rating-component";
function Product(props) {
    const {name,img,category,price,stock,seller,star} = props.productsObject;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // const starIcon = <FontAwesomeIcon style={{color:'goldenrod'}} icon={faStar} />
    return(
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="product-img" />
            </div>
            <div className="product-info">
                <h3>Name : {name}</h3>
                <h4>price :{price} </h4>
                <p>Catagori :{category}</p>
                <span><small>Stock : {stock} </small><small> , Seller : {seller} </small> 
                <small>, 
                Ratting : 
                {star} <StarRatingComponent
                name={'ratingStar'}
                value={star}
                starCount={5}/></small>
                </span>
                <button onClick={()=> props.addToCart(props.productsObject)} className="cart-btn">{cartIcon} Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;