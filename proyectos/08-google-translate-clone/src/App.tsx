import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useStore } from './hooks/useStore';

function App() {
  const { fromLanguage, setFromLanguage } = useStore()

  return (
    //usar el hook useReducer
    <>
      <div className='App'>
        <h1>Google translate</h1>
        <button onClick={() => {
          setFromLanguage('es')
        }}>Cambiar a Español</button>
        {fromLanguage}
      </div>
    </>
  )
}

export default App
