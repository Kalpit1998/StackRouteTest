import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            // console.log(response.data);
            console.log(products)

            
            setProducts(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

  return (
    <div className="container-fluid text-center mt-4">
        <div className="row">
            {products.map((product) => {
                return (
                    <div className="col-sm" key={product.id} style={{marginBottom: "1em", height: "35rem"}}>
                        <div className="card" style={{width: "18rem"}} >
                            <img src={product.image} className="card-img-top" alt="..."  style={{width: "100%"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <Link to={"/"} className="btn btn-primary">Buy Now</Link>
                                {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Products