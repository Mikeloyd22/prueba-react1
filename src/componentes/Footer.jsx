import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='d-flex justify-content-around mb-5'>
            <div className='d-flex flex-column'>
                <Link to="/Facebook">Facebook</Link>
                <Link to="/Instagram">Instagram</Link>
                <Link to="/Linkedin">Linkedin</Link>
                
            </div>
            <div className='d-flex  flex-column'>
                <Link to="/Personas">Personas</Link>
                <Link to="/TerminosCondiciones">TerminosCondiciones</Link>
                <Link to="/Seguridad">Seguridad</Link>
                
            </div>
        </footer>
  )
}

export default Footer