import React from 'react'
import { useSelector } from 'react-redux';
const Header = () => {

    const allAmount = useSelector(state => state.amount)
    const { amount, productAdd } = allAmount;
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>FakeShop</h2>
                <div style={{ marginTop: '5px' }}>
                    <span>Your Selected Total Item Price is: &#36;{amount} <br /></span>
                    <span>Total Product Is Selected : {productAdd}</span>
                </div>
            </div>
        </div>
    );
}

export default Header
