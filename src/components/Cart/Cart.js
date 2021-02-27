import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, pr) => total + pr.price, 0);

    let shipping = 0;

    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    
    const tax = (total / 10).toFixed(2);
    const grand = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>product price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>TAX + VAT: {tax}</small></p>
            <p>total Price: {grand}</p>
        </div>
    );
};

export default Cart;