import React, {useState} from 'react';
import { useAsyncValue } from 'react-router-dom';



const AddProduct = ()=>{


        const [name,setName] = useState('');
        const [price,setPrice] = useState('');
        const [category,setCategory] = useState('');
        const [company,setCompany] = useState('');
        const [error,setError] = useState(false);

        const addProduct = async (e)=>{

            if(!name || !price || !category || !company){

                    e.preventDefault()
                    setError(true);
                        return false;
                 }
           
            console.log(name, price, category, company);
            
            const userId = JSON.parse(localStorage.getItem('users'))._id;
            console.warn(userId);

            let result = await fetch('http://localhost:4500/api/product/add-product', {
                method:'post',
                body: JSON.stringify({name,price,category,company,userId}),
                headers: {
                    "Content-Type":"application/json"
                }
            });


            result = await result.json();
            console.log(result);


        }




    return(
        <div className='product'>
             <h1>Add Product </h1>
            <form>
                <input type="text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)}  value={name} /><br />
                {error && !name && <span className='input-vaidation'>Enter valid name</span>}
                <input type="text" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}  value={price} /><br />
                {error && !price && <span className='input-vaidation'>Enter valid price </span>}
                <input type="text" placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)} value={category} /><br />
                {error && !category && <span className='input-vaidation'>Enter valid category</span>}
                <input type="text" placeholder="Enter Company Name" onChange={(e)=>setCompany(e.target.value)}  value={company}/><br />
                {error && !company && <span className='input-vaidation'>Enter valid company</span>}
                <button onClick={addProduct}  className="signup_button">Add Product</button>
            </form>
        </div>
    );

}


export default AddProduct;