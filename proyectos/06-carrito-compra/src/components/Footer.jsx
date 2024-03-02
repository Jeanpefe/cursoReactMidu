import './Footer.css'

export function Footer ({filters}) {
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {/* <h5>Carrito de Compra con useContext y useReducer</h5> */}
        </footer>
    )
}