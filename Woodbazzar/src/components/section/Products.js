import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import '../css/Products.css'
export class Products extends Component{
    static contextType = DataContext;
    render() {
        const {products} = this.context;
        const handleLow=()=>{
        const ser=products.sort(function(a, b) {
            return a.price - b.price;
        });
        this.setState({products:ser});
        console.log(ser);
        }
        const handleHigh=()=>{
        const ser=products.sort(function(a, b) {
            return a.price - b.price;
        });
        ser.reverse();
        this.setState({products:ser});
        console.log(ser);
    }
        return (
            <>
            <div className="fillter">
               Sort by price:
                <button className="filterbut" onClick={()=>handleLow()}>Low</button>
                <button className="filterbut" onClick={()=>handleHigh()}>High</button>
            </div>
            <div id="product" >
               {
                products.map(product =>(
                    <div className="card" key={product._id} id={product._id}>

                        <Link to={`/product/${product._id}`}>
                             <img src={product.src} alt=""/>
                        </Link>
                        <div className="content" >
                              <h3>
                                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                              </h3>
                              <span>${product.price}</span>
                              <p>{product.description}</p>
                              <button onClick={()=> this.context.addCart(product._id)}>Add to cart</button>
                        </div>
                    </div>
                    
                ))
               }
            </div>
            </>
        )
    }
}
export default Products;