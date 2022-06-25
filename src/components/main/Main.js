import React from 'react'
import "./Main.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faBullseye} from "@fortawesome/free-solid-svg-icons";
import {faHeadSideCoughSlash} from "@fortawesome/free-solid-svg-icons";
import {faUserShield} from "@fortawesome/free-solid-svg-icons";
import {faUserLock} from "@fortawesome/free-solid-svg-icons";
import {faFolderMinus} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../media/img1.jpeg";
import img2 from "../../media/img2.jpeg";

const main = () => {
  return (
    <section className='contenedorMain'>
        <section className='contenedorSticker' >
            
            <p> <FontAwesomeIcon icon={faLocationDot}/>ubicacion de la empresa</p>
            <p> <FontAwesomeIcon icon={faEnvelope}/>atencion al cliente</p>
            <p><FontAwesomeIcon icon={faPhone}/>(993) 3524257 ~{"\n"} Lunes a Viernes de 8;00 a 17;00hrs</p>
        </section>
        <section className='contenedorInfo'>
            <div className='contenedorHacemos'>
                <h3>¿que hacemos?</h3>
                <h2>Informacion importante que debos resaltar Lorem Ipsum 
                    es simplemente un texto ficticio de la industria 
                    de la impresión y la composición tipográfica. </h2>
                <p>Informacion mas detallada sobre lo que
                     hacemos Lorem Ipsum es simplemente un texto ficticio de l
                     a industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó
                      para hacer un libro de muestras tipográficas. </p>
                <span><a>Habala con nuestros expertos</a></span>
            </div>
            <div className='contenedorImgs'>
                <div className='img1'><img  src={img1}></img></div>
                <div className='img2'><img  src={img2}></img></div>
            </div>
        </section>
        <section className='contenedorAcercaDe'>
            <section className='acercaDeText'>
                <h3>acerca de nosotros</h3>
                <h2>Lorem Ipsum es simplemente un texto ficticio de la industria
                 de la impresión y la composición tipográfica. 
                </h2>
                <p>Lorem Ipsum es simplemente un texto ficticio 
                de la industria de la impresión y la composición 
 
                tipos y la codificó para hacer un libro de muestras tipográficas.</p>
            </section>
            <section className='contenedorDivs'>
                <div className='carts'> <FontAwesomeIcon icon={faBullseye} fontSize = "200px"/>
                <div> Lorem Ipsum es simplemente un texto ficticio de la industria 
                    de la impresión y la composición tipográfica
                    </div>
                </div>   
                <div className='carts'><FontAwesomeIcon icon={faHeadSideCoughSlash} fontSize = "200px"/>
                   <div> Lorem Ipsum es simplemente un texto ficticio de la industria 
                    de la impresión y la composición tipográfica
                    </div>
                </div>   
                <div className='carts'><FontAwesomeIcon icon={faUserShield} fontSize = "200px"/>
                    <div> Lorem Ipsum es simplemente un texto ficticio de la industria 
                    de la impresión y la composición tipográfica
                    </div>
                </div>   
                <div className='carts'><FontAwesomeIcon icon={faUserLock} fontSize = "200px"/>                 
                    <div> Lorem Ipsum es simplemente un texto ficticio de la industria 
                    de la impresión y la composición tipográfica
                    </div>
                </div>   
                <div className='carts'><FontAwesomeIcon icon={faFolderMinus} fontSize = "200px"/>                   
                    <div> Lorem Ipsum es simplemente un texto ficticio de la industria 
                    de la impresión y la composición tipográfica
                    </div>
                </div>   
  
            </section>


        </section>

    </section>
  )
}

export default main