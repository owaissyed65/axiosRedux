import axios from 'axios';
import './product.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../Redux/action-creator/action';
import ProductComponent from './ProductComponent';

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
        document.title = "FakeStore - Your Choice Is our Priority"
        // eslint-disable-next-line
    }, []);
    const products = useSelector(state => state.products.products)
    return (
        (products.length === 0 ? <div className='loading'>Loading Please Wait</div> :
            <div className='box'>
                {products.map((obj) => {
                    return (
                        <div key={obj.id}> <ProductComponent id={obj.id} title={obj.title} image={obj.image} price={obj.price} rating={obj.rating} /></div>
                    )
                })}
            </div>
        ))

}

export default ProductListing
