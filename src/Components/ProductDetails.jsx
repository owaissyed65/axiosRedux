import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import axios from 'axios'
const ProductDetails = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const fetchSelectedData = async () => {

        const data = await axios.get(`https://fakestoreapi.com/products/${1}`).catch(err => console.log(err))
        // setProducts([...data.data]);
        dispatch()
    }
    useEffect(() => {
        fetchSelectedData();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div>

            </div>
        </>
    )
}

export default ProductDetails
