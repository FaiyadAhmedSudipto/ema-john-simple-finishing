import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);
    // const total = cart.reduce( (total, prd) => total + prd.price, 0 )
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 200) {
        shipping = 0;
    }
    else if (total > 10) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 7.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <h3 className='text-danger'>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;