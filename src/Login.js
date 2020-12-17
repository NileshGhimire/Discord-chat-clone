import React from 'react';
import {Button} from '@material-ui/core';
import './Login.css';
import {auth,provider} from './Firebase';
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <h1> Login</h1>
            <div className="login_logo">
                <img alt= "" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fd1Iaj_Xf6Ng%2Fmaxresdefault.jpg&f=1&nofb=1" />

            </div>
            <Button onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login;
