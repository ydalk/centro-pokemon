
// @ts-nocheck
// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';


export const FormContext = createContext();

/**
 * @type {object} initialState
 */
const initialState = {};


/** esta funcion define los resultados y las acciones del reducer
 * @param {object} action 
 * @type {object} state
 * @return {function(state, action): state} inputReducer
 * 
 */



const inputReducer = (state, action) => {
  switch (action.type) {
      case 'ACTUALIZAR_ENTRENADOR':
          return {
            ...state,
            data: action.payload
          }
      case 'ACTUALIZAR_POKEMON':
          return {
            ...state, 
            data: action.payload
          }
      case 'SEND' :
          return state = null;
      default :
        return state
  }
}



export const FormularioProvider = ({children}) => {
  const [store, dispatch] = useReducer(inputReducer, initialState)

  return (
    <FormContext.Provider value={[store, dispatch]}>
        {children}
    </FormContext.Provider>
  )
}


FormularioProvider.propTypes = {
  children: PropTypes.element.isRequired,
};