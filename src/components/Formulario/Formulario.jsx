import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { useMutation, useQuery } from "react-query";
import { getPokemon } from "../../api/getPokemon";
import { postData } from "../../api/api";


const Formulario = () => {
  
  const refForm = useRef(null)
  const { data, isError, isLoading} = useQuery(['type'], getPokemon)

  //const {mutate, isLoading1, isSuccess, data1, resset} = useMutation( postData )

  // mutate({
  //   name: refForm.current.elements.nombre.value
  // })
  
  console.log(refForm);

  const handleSubmit = (event) => {
    event.preventDefault()

    // mutate({
    //     name: refForm.current.elements.nombre.value,
    //     lastname: refForm.current.elements.apellido.value
    // }, {
    //     onSuccess: () => {
    //       refForm.current.reset()
    //     }
    // })

}

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <form className="formulario-ingreso" onSubmit={handleSubmit} ref={refForm}>
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario" >
          {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input 
                name="nombre" 
                label="Nombre"
                alt= "entrenador"
              />
              <Input 
                name="apellido" 
                label="Apellido" 
                alt="entrenador" 
              />
              <Input 
                name="email" 
                label="Email" 
                type="email" 
                alt="entrenador" 
              />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input 
                name="nombrePokemon" 
                label="nombre" 
                alt='pokemon' 
              />
              <label> tipo </label>
              <select 
                name="tipoPokemon" 
                disabled = {isLoading || isError }
              > 
                {
                    data?.results.map((item)=>(
                      <option>{item.name}</option>
                    ))
                }
              </select>
              <Input 
                name="elementoPokemon" 
                label="elemento" 
                alt='pokemon' 
              />
              <Input 
                name="alturaPokemon" 
                label="altura" 
                alt='pokemon' 
              />
              <Input 
                name="edadPokemon" 
                label="edad"
                alt='pokemon'  
              />
            </div>
          </div>
          <Detalle />
        </div>
      </form>
    </>
  );
};

export default Formulario;
