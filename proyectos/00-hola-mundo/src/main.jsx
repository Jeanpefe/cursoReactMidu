import React from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({text}) => {
  return (
  <button>
    {text}
  </button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <Button text="hola"></Button>
  </React.Fragment>
)