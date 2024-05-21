import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useReducer } from 'react';
import { type State } from './types';

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
function reducer(state: State, action) {
  const { type, payload } = action //Sacamos del action la propiedad type

  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: payload
    }
  }

  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState)
  return (
    //usar el hook useReducer
    <>
      <div className='App'>
        <h1>Google translate</h1>
      </div>
    </>
  )
}

export default App
