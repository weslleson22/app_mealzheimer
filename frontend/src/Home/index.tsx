import React from "react";
import './styles.css'
import logo from '../../src/assets/logo-app.svg';
import {FiLogIn} from 'react-icons/fi';
const Home = () => {
    return(
       <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="LogoApp" height={150}/>
                </header>
                <main>
                    <h1>Olá 😀 Bem vindo ao projeto MeAlzherimer</h1>
                    <p>Ajudamos pessoas a encontrarem suas localizações</p>
                     
                    <a href="/cadastro">
                        <span>
                        <FiLogIn/>
                        </span>
                        <strong>👉Cadastre um endereço aqui 👈</strong>
                    </a>
                </main>
            </div>
       </div>
    )
}
export default Home;
