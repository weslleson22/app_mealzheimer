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
                Volta para Inicio 👈
            </Link>
   
            </header>

            <form>
                <h1>Por favor cadastre os <br /> seus principais endereço <br />😊</h1>
                <fieldset>
                    <legend>
                        <h2>| Dados 😄</h2>
                    </legend>

                    
                        <div className="field">
                            <label htmlFor="name">Por favor informe o nome do endereço</label>
                            <input type="text" name="name" id="name" />
                        </div>
                    

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input
                             type="email"
                             name="email"
                             id="email"
                             />
                        </div>
                    

                    
                        <div className="field">
                            <label htmlFor="whatsapp">Contato do Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>
                            | Endereço 😄

                        </h2>
                        <span>Por favor selecione o endereço no mapa</span>
                    </legend>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select name="uf" id="uf">
                                    <option value="0">Selecione uma UF</option>
                                </select>

                            </div>
                            <div className="field">
                                <label htmlFor="city">Estado (UF)</label>
                                <select name="city" id="city">
                                    <option value="0">Por favor selecione uma Cidade</option>
                                </select>
                            </div>
                        </div>
                    
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>| Categoria dos endereço 😄</h2>
                        <span>Selecione uma ou mais categorias abaixo </span>
                        
                    </legend>
                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/avos.svg" alt="Teste" width={110} height={110}/>
                            <span>PAI</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/irmaos.svg" alt="Teste" width={110} height={110} />
                            <span>PAI</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/tios.svg" alt="Teste" width={110} height={100}/>
                            <span>PAI</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/avos.svg" alt="Teste" width={110} height={110}/>
                            <span>PAI</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/irmaos.svg" alt="Teste" width={110} height={110} />
                            <span>PAI</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/tios.svg" alt="Teste" width={110} height={100}/>
                            <span>PAI</span>
                        </li>

                    </ul>
                </fieldset>
            </form>

        </div>
    );

};
export default CreatePoint;