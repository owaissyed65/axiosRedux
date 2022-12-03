import axios from 'axios'
// import React, { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../Redux/action-creator/action'

const ProductListing = () => {
    // const [product, setProducts] = useState([]);
    const dispatch = useDispatch();
    const fetchData = async () => {

        const data = await axios.get("https://fakestoreapi.com/products").catch(err => console.log(err))
        // setProducts([...data.data]);
        dispatch(setProduct(data.data))
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);
    const products = useSelector(state => state.products.products)
    const productItem = products.map((obj) => {
        const { rating } = obj
        return (
            <div key={obj.id}><div key={obj.id}>{rating.rate}{obj.price}</div><div>{obj.category}</div></div>
        )
    })
    return productItem

}

export default ProductListing
