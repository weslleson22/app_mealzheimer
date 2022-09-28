import React, {useEffect, useState} from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import {TileLayer, Marker, Map} from "react-leaflet";
import './styles.css';
import api from "../../services/api";
import axios from 'axios';
//Sempre que criamos um array ou objeto: manualmente preciamos informar o tipo da variavel
const CreatePoint = () =>{
    interface Item{
        id: number;
        title: string;
        image_url: string
    }
    interface IBGEUFResponse{
        sigla: string
    }
    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);
    useEffect(()=>{

        api.get('items').then(response => {
            setItems(response.data)
        });

    },[]);

    useEffect(()=>{
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response=>{
            //
            const ufInitials = response.data.map(uf => uf.sigla);
            //console.log(ufInitials);
            setUfs(ufInitials)
        });
    },[]);


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
            <Map center={[-2.560967,-44.2194533]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-2.560967,-44.2194533]}/>
          </Map>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select name="uf" id="uf">
                                <option value="0">Selecione uma UF</option>
                                    {ufs.map((uf) => (
                                    <option key={uf} value={uf}>
                                        {uf}
                                    </option>
                                    ))}
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
                        {items.map(item=>( 
                        <li key={item.id}>
                            <img src={item.image_url} alt={item.title} width={110} height={110}/>
                            <span>{item.title}</span>
                        </li>
                        ))}
                    </ul>
                </fieldset>
                <button type="submit">
                    Cadastrar endereço <br></br>👆
                </button>
            </form>

        </div>
    );

};
export default CreatePoint;