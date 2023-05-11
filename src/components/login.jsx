import React from 'react';
import "../css/login.css"
import bakeli from '../img/bakeli.png';
import Input from './Input';

const Login = () => {
  return (
    <div class="wrapper">
        <div class="logo">
            <img src={bakeli} alt="" />
        </div>
        <div class="text-center mt-4 name">
            RESTO
        </div>
        <form class="p-3 mt-3">
            <Input type='email' placeholder='entrer votre email' />
            <Input type='password' placeholder='entrer votre mot de passe' />
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Mot de passe oublier?</a> ou <a href="/inscription">S'inscrire</a>
        </div>
    </div>
  )
}

export default Login