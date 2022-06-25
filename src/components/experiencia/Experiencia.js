import React from 'react'
import "./Experiencia.css"
import imgExperiencia from "../../media/imgExperiencia.jpeg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const Experiencia = () => {
  return (
    <section className='contenedorExperiencia'>  
        <section className='experienciaImg'>
            <div><img src={imgExperiencia}></img>
            </div>
            
        </section>
        <section className='experienciaText'>
              <h2>
                  NUESTRA EXPERIENCIA
              </h2>
              <p className='parrafoExperiencia'>
                  Lorem Ipsum ha sido el texto ficticio estándar de
                  la industria desde la década de 1500, cuando un impresor
                  desconocido tomó una galera de tipos
                  y la codificó para hacer un libro de muestras tipográficas.
              </p>
              <div className='checkPoint'>
                  <div><FontAwesomeIcon icon={faCircleCheck} fontSize="30px" /></div>
                  <p> Maquinaria y Equipo</p>
              </div>
              <div className='checkPoint'>
              <div><FontAwesomeIcon icon={faCircleCheck} fontSize="30px" /></div>
              <p> Servicios de Ingenieria</p>
              </div>
              <div className='checkPoint'>
              <div><FontAwesomeIcon icon={faCircleCheck} fontSize="30px" /></div>
                  <p> Educacion</p>
              </div>    
        </section>


        
        
    
        
    </section>
  )
}

export default Experiencia