import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import '../App.css';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('users');

        if (auth) {
            navigate('/')
        }
    })

    const collectData = async (e) => {
        e.preventDefault()
        console.log(name, email, password);

        let result = await fetch('http://localhost:4500/api/user/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        console.log(result);
        localStorage.setItem('users', JSON.stringify(result));
        localStorage.setItem('token', JSON.stringify(result.auth))
        navigate('/')

    }


    return (
        <div className="signup">
            <h1>Signup </h1>
            <form>
                <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button onClick={collectData} className="signup_button">Signup</button>
            </form>
        </div>
    );

}

export default Signup;