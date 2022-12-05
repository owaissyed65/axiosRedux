import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import axios from 'axios'
import { selectedProduct } from '../Redux/action-creator/action';
const ProductDetails = () => {
    // Dispatch
    const dispatch = useDispatch();
    // UsePArams
    const id = useParams();
    // functions
    const fetchSelectedData = async () => {
        const { productid } = id;
        const data = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch(err => console.log(err))
        return data
    }
    const getSelectedData = async () => {
        const data = await fetchSelectedData();
        dispatch(selectedProduct(data.data))
    }
    const productDet = useSelector((state) => state.selectedProducts)
    const { selProduct } = productDet
    console.log(productDet.selProduct)
    useEffect(() => {
        fetchSelectedData();
        getSelectedData();
        if (selProduct.title === undefined) {
            document.title = 'FakeStore'
        }
        else document.title = selProduct.title
        // eslint-disable-next-line
    }, []);
    document.title = selProduct.title
    return (
        (Object.keys(productDet.selProduct).length === 0 ? <>
            <div>
                Loading .....
            </div>
        </> : <div className='cont-details'>
            <div className="cont-child-title">{selProduct.title}</div>
            <div className="cont-child-img"><img src={selProduct.image} alt="Error Loading" /></div>
            <div className="cont-child-price"><span>Price: &#36;{selProduct.price} only</span></div>
            <div className="cont-child-description">Description: {selProduct.description}</div>
            <div className="cont-child-rating"><div className="rate">Rate: {selProduct.rating.rate}</div><div className="count">TotalProduct: {selProduct.rating.count}</div></div>
        </div>)
    )
}

export default ProductDetails
