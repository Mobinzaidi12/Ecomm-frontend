import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  

    const handleLogin = async (e) => {
        e.preventDefault()

        let result = await fetch('http://localhost:4500/api/user/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        // console.log(result.name);

        if (result.status) {
            localStorage.setItem('users', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth))
            navigate('/')
        }else {
          
                alert("please enter your correct email and password");
        
        }

    }


    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <button onClick={handleLogin}  className="login_button">Login</button>
            </form>
        </div>
    )

}
export default Login;