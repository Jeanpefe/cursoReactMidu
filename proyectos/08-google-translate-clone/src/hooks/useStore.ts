import { useReducer } from 'react';
import { Action, FromLanguage, Language, type State } from '../types';

//Mirar el readme para ver una imagen representativa
//1. Create an initialState
const initalState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  //2. Create a reducer
  function reducer(state: State, action: Action) {
    const { type } = action //Sacamos del action la propiedad type
  
    if (type === 'INTERCHANGE_LANGUAGES') {
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
    }
  
    if (type === 'SET_FROM_LANGUAGE') {
      return {
        ...state,
        fromLanguage: action.payload
      }
    }
  
    if (type === 'SET_TO_LANGUAGE') {
      return {
        ...state,
        toLanguage: action.payload
      }
    }
  
    if (type === 'SET_FROM_TEXT') {
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    }
  
    if (type === 'SET_RESULT') {
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    return state
  }
  
  export function useStore() {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
      }, dispatch] = useReducer(reducer, initalState)

    //No es buena práctica devolver el dispatch por si en algún momento se cambia a usar zustand, redux, ... Los componentes no deben saber lo que hay por detrás
      const interchangeLanguages = () => dispatch({type: 'INTERCHANGE_LANGUAGES'})
      const setFromLanguage = (payload:FromLanguage) => dispatch({type: 'SET_FROM_LANGUAGE', payload: payload})
      const setToLanguage = (payload: Language) => dispatch({type: 'SET_TO_LANGUAGE', payload: payload})
      const setFromText = (payload:string) => dispatch({type: 'SET_FROM_TEXT', payload: payload})
      const setResult = (payload:string) => dispatch({type: 'SET_RESULT', payload: payload})


      return { 
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
      }
  }