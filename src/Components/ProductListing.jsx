import axios from 'axios';
import './product.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../Redux/action-creator/action';
import { Link } from 'react-router-dom';

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
                        <div className="card-m" key={obj.id}>
                            <span className="img">
                                <img src={obj.image} alt="" />
                            </span>
                            <div className='title'>Title : {obj.title}</div>
                            <div className='price'>Price : ${obj.price}</div>
                            <div className='rate'>Rating : {obj.rating.rate}</div>
                            <Link to={`/product/${obj.id}`} >
                                <button className='button'>Details</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        ))

}

export default ProductListing
