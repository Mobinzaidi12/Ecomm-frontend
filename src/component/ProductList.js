import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"

const ProductList = () => {


    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        let result = await fetch('http://localhost:4500/api/product',{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProduct(result);

    }



    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:4500/api/product/${id}`, {
            method: 'Delete',
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()

        console.log(result);

        if (result) {
            alert('record delete')
            getProduct()
        }
    }


    const SearchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/api/product/search/${key}`,{
                headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            result = await result.json();

            if (result) {
                setProduct(result)
            }
        } else {
            getProduct()
        }


    }




    return (
        <div>
            <input className="input_search" type="text" placeholder="Search Product" onChange={SearchHandle} />
            <table>
                <tr className="heading">
                    <td>S No.</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Category</td>
                    <td>Comapny</td>
                    <td>Operation</td>
                </tr>
                {
                    products.length > 0 ? products.map((items, index) =>
                        <tr key={items._id}>
                            <td>{index + 1}</td>
                            <td>{items.name}</td>
                            <td>{items.price}</td>
                            <td>{items.category}</td>
                            <td>{items.company}</td>
                            <td><button onClick={() => deleteProduct(items._id)}>Delete</button>
                                <button><Link to={`/update/${items._id}`}>update</Link></button>
                            </td>
                        </tr>
                    ):
                    <h4> Product Not Found</h4>
                }
            </table>
            
        </div>
    );

}

export default ProductList;