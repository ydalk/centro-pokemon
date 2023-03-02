import React from "react";
import { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';

const Input = ({ name, label, alt, type = "text" }) => {

  const [store, dispatch] = useContext(FormContext);
  const [inputState, setInputState] = useState("");
  

  /**
   * esta funcion captura el evento y extrae el valor del input
   * @param {object} e 
   * @type {function(object):string} onChange
   * @return {object} contiene el valor ingresado en el input
  */

  const onChange = (e) => {
    setInputState(e.target.value);
  };

  /**
   * @param {object} e 
   * @type {function(object) : string} onBlur
   * @return {object} contiene el objeto guardado en el dispatch
  */


  const onBlur = (e) => {
    e.preventDefault();

    if (e.target.alt !== 'pokemon') {
      dispatch({
        type: "ACTUALIZAR_ENTRENADOR",
        payload: { ...store?.data, [e.target.name]: e.target.value },
      })
    } else 
        dispatch({
        type: "ACTUALIZAR_POKEMON",
        payload: { ...store?.data, [e.target.name]: e.target.value },
      });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={inputState}
        name={name}
        alt={alt}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired
}