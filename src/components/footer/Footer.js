import React from 'react'
import "./Footer.css"
import logoTest from "../../media/logoTest.jpeg";

const footer = () => {
  return (
    <footer>
        <section className='section1'>
            <h3>
            Lorem Ipsum es simplemente un texto ficticio de la industria.
            </h3>
            <p>
            Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica
            </p>
            <span><a>Documentacion publica</a></span>
        </section>
        <section className='section2'>
            <div><img src={logoTest}></img></div>
            <p>Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica</p>
            <p>atencionalcliente(a)test.com</p>
        </section>
        <section className='section3'>
            <p>Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica</p>
        </section>
    </footer>
  )
}

export default footer