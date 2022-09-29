import React, {useEffect, useState, ChangeEvent, FormEvent} from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import {TileLayer, Marker, Map} from "react-leaflet";
import './styles.css';
import api from "../../services/api";
import axios from 'axios';
import { LeafletMouseEvent } from "leaflet";
//import { useNavigate } from 'react-router-dom';
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
    interface IBGECityResponse{
        nome:string;
    }
    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
        0,
        0,
      ]);
    const [initialPosition, setInitionPosition] = useState<[number, number]>([
        0,
        0,
      ]);
      
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
      });
    const [city, setCities] = useState <string[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    
   // const navigate = useNavigate();
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setInitionPosition([latitude, longitude]);
        });
      });

//Carregando as categorias
    useEffect(()=>{

        api.get('items').then(response => {
            setItems(response.data)
        });

    },[]);
//Carregando os estados
    useEffect(()=>{
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response=>{
            //
            const ufInitials = response.data.map(uf => uf.sigla);
            //console.log(ufInitials);
            setUfs(ufInitials)
        });
    },[]);

    // Carregando as cidadea
    useEffect(() => {
        if (selectedUf === "0") return;
    
        axios
          .get<IBGECityResponse[]>(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
          )
          .then((response) => {
            const cityNames = response.data.map((city) => city.nome);
            setCities(cityNames);
          });
      }, [selectedUf]);

    
    function handlerSelectUf(event: ChangeEvent<HTMLSelectElement>){
        const uf = event.target.value;
        setSelectedUf(uf)
    }
        
    function handlerSelectCity(event: ChangeEvent<HTMLSelectElement>){
        const City = event.target.value;
        setSelectedCity(City)
    }

    function handleMapClick(event: LeafletMouseEvent) {
        const { lat: latidude, lng: longitude } = event.latlng;
        setSelectedPosition([latidude, longitude]);
      }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
       const { name, value } = event.target;
       setFormData({ ...formData, [name]: value });
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.includes(id);
        if (alreadySelected) {
          setSelectedItems([
            ...selectedItems.filter((idFiltered) => idFiltered !== id),
          ]);
        } else {
          setSelectedItems([...selectedItems, id]);
        }
    
      }
      async function handleSubmit(event: FormEvent) {
        event.preventDefault();
    
        const { name, email, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;
    
        const data ={
    
        name,
        email,
        whatsapp,
        city,
        uf,
        latitude,
        longitude,
        items
        };

        console.log(data);

    await api.post("/points", data);
    alert('Endereço Cadastrado! 😊');
   // history.push('/');//Depois de salva vai para a rota informada
   //navigate('/');

  }

    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="AppMeAzheimer" height={250}/>

                
            
            <Link to="/">
                <FiArrowLeft />
                Volta para Inicio 👈
            </Link>
   
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Por favor cadastre os <br /> seus principais endereço <br />😊</h1>
                <fieldset>
                    <legend>
                        <h2>| Dados 😄</h2>
                    </legend>

                    
                        <div className="field">
                            <label htmlFor="name">Por favor informe o nome do endereço</label>
                            <input type="text" name="name" id="name" onChange={handleInputChange} />
                        </div>
                    

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input
                             type="email"
                             name="email"
                             id="email"
                             onChange={handleInputChange}
                             />
                        </div>
                    

                    
                        <div className="field">
                            <label htmlFor="whatsapp">Contato do Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" onChange={handleInputChange}/>
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
            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition}/>
          </Map>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select name="uf" id="uf" value={selectedUf} onChange={handlerSelectUf}>
                                <option value="0">Selecione uma UF</option>
                                    {ufs.map((uf) => (
                                    <option key={uf} value={uf}>
                                        {uf}
                                    </option>
                                    ))}
                                </select>
              
                            </div>
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <select name="city" id="city" value={selectedCity} onChange={handlerSelectCity}>
                                    <option value="0">Por favor selecione uma Cidade</option>
                                        {city.map(city =>
                                            <option key={city} value={city}>{city}</option>
                                            )}
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
                        <li key={item.id} onClick={()=> handleSelectItem(item.id)}
                        className={selectedItems.includes(item.id)? 'selected' : ''}
                        >
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