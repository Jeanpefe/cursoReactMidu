import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useReducer } from 'react';
import { Action, type State } from './types';

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
