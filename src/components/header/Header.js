import React from 'react'
import "./Header.css";
import logoTest from "../../media/logoTest.jpeg";

const header = () => {
  return (
    <header>

        <section className='contenedorBar'>

            <div className='logo'>
                <a href='#'><img src={logoTest}></img></a>
            </div>
            <navbar className= 'menu'>
                <a href='#'> INICIO</a>
                <a href='#'>NOSOTROS</a>
                <a href='#'>CONTACTO</a>
            </navbar>
        </section>

        <div className='contenedorHome'>
            <p>bienvenidos</p>
            <h2>Creamos Tech</h2>
            <h1>la mejor tecnologia</h1>
            <span><a>conoce nuestros servicios</a></span>
        </div>

    </header>
  )
}

export default header