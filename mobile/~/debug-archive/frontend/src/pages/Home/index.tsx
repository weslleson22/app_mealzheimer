import React from "react";
import './styles.css'
import logo from '../../assets/logo.png';
import {FiLogIn} from 'react-icons/fi';
import { Link, Route } from "react-router-dom";
const Home = () => {
    return(
       <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="LogoApp" height={150}/>
                </header>
                <main>
                    <h1>Olá 😀 Bem vindo ao projeto MeAlzheimer</h1>
                    <p>Ajudamos pessoas a encontrarem suas localizações</p>
                    


                    <Link to="/create-point">
                        <span>
                        <FiLogIn />
                        </span>
                        <strong>👉Cadastre um endereço aqui 👈</strong>
                    </Link>
                    
                </main>
            </div>
       </div>
    )
}
export default Home;
