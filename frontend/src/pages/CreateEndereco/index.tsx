import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './styles.css';
const CreatePoint = () =>{
    
    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="AppMeAzheimer" height={250}/>
            
            <Link to="/">
                <FiArrowLeft />
                Volta para Inicio
            </Link>
            </header>

        </div>
    );

};
export default CreatePoint;