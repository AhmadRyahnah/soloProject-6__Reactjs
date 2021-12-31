import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";



export default function Navpath() {
    const navigate = useNavigate();
    const handleUseNavigate = () => {
      localStorage.getItem('User') ? navigate('/Services') : navigate('/SignInUp');
    };
    return <Login handleUseNavigate={handleUseNavigate} />
  }



const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrormsg] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i <= localStorage.length; i++) {
            const user = JSON.parse(localStorage.getItem(localStorage.key(i)));

            if (user.email === email && user.password === password) {
                localStorage.setItem('loggedUser', JSON.stringify(user))
                // alert('Successful Login');
                props.handleUseNavigate();
            } else {
                setErrormsg('The Email or Password incorrect')
            }
        }
    };


    return (
        <div className="loginContainer">

            <form className="loginForm">
                <h2>Sign In</h2>

                <input className="email" type='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required placeholder='Email' />
                <input className="password" type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required placeholder='Password' />
                <p>{errorMsg}</p>
                <button onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
    )
}
// export default Login;