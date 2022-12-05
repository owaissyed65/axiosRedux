import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux/action-creator/action'
import { bindActionCreators } from 'redux';
const ProductComponent = (props) => {
    const dispatch = useDispatch();
    const { addCart } = bindActionCreators({ addCart: addToCart }, dispatch)
    return (
        <>
            <div className="card-m" >
                <span className="img">
                    <img src={props.image} alt="" />
                </span>
                <div className='title'>Title : {props.title}</div>
                <div className='price'>Price : ${props.price}</div>
                <div className='rate'>Rating : {props.rating.rate}</div>
                <Link to={`/product/${props.id}`} >
                    <button className='button'>Details</button>
                </Link>
                <div className="cart"><button onClick={() => addCart(props.price)}>Add To Cart</button></div>
            </div>

        </>
    )
}

export default ProductComponent
