import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fondo1 from'../Imagenes/Fondo1.jpg';
import Fondo2 from '../Imagenes/Fondo2.jpg';
import Fondo3 from '../Imagenes/Fondo3.jpg';

function Banner (){
    return(
        <Carousel className='App-banner'>
      <Carousel.Item>
      <img src={Fondo2} alt = "Fondo2" className="Img-carrusel"/>
        <Carousel.Caption>
          <h3>Procesador</h3>
          <p>El procesador es el cerebro del sistema, justamente procesa todo lo que ocurre en la PC y ejecuta todas las acciones que existen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Fondo1} alt = "Fondo1" className="Img-carrusel"/>
        <Carousel.Caption>
          <h3>ReactJs</h3>
          <p>React JS es una librería de código abierto de JavaScript para crear interfaces de usuario reutilizables, interactivas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Fondo3} alt = "Fondo3" className="Img-carrusel"/>
        <Carousel.Caption>
          <h3>Github</h3>
          <p>
          Github es un portal creado para alojar el código de las aplicaciones de cualquier desarrollador, y que fue comprada por Microsoft en junio del 2018.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
}
export default Banner;
