import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


export class Payment extends Component {
    constructor(prop){
        super(prop);
    
        this.thanks=this.thanks.bind(this);
    }
    thanks(token){
        console.log(token)
    }
    
    render() {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>Payment Component</h2>
                <StripeCheckout
                stripekey="pk_test_51HxqYhFfjW6ZuEGcDNUk6IeOLZy6qH8RBhxxtVVD60zmbLoinOfwrRPy9ugtwuSDXMkrwOPWm7QDKJC6ZAJMT16G00wK1jTwGX"
                name="Furniture"
                amount={150000}
                token={this.thanks}
                />
            </div>
        );
    }
}

export default Payment;