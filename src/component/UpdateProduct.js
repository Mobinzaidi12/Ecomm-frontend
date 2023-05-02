import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



const UpdateProduct = () => {


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getProductDetail();
    }, [])


    const getProductDetail = async () => {

        let result = await fetch(`http://localhost:4500/api/product/${params.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

        console.warn(result)
    }


    const updateProduct = async (e) => {
        e.preventDefault()
        console.warn(name, price, category, company)

        let result = await fetch(`http://localhost:4500/api/product/${params.id}`,
            {
                method: 'Put',
                body: JSON.stringify({ name, price, category, company }),
                headers: {
                    'Content-Type': 'application/json',
                     authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

                }
            })

        result = await result.json();
        console.warn(result)
        navigate('/')


    }




    return (
        <div className='product'>
            <h1>Update Product </h1>
            <form>
                <input type="text" placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)} value={name} /><br />
                <input type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} value={price} /><br />
                <input type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} value={category} /><br />
                <input type="text" placeholder="Enter Company Name" onChange={(e) => setCompany(e.target.value)} value={company} /><br />
                <button onClick={updateProduct} className="signup_button">Update Product</button>
            </form>
        </div>
    );

}


export default UpdateProduct;