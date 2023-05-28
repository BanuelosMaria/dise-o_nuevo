import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Fondo1 from "../Imagenes/Fondo1.jpg";


function Banner() {
  return (
    <Carousel className="App-banner">
      <Carousel.Item>
        <img src={Fondo1} alt="Fondo2" className="Img-carrusel" />
        <Carousel.Caption>
          <h2>Procesador</h2>
          <h6>
            El procesador es el cerebro del sistema, justamente procesa todo lo
            que ocurre en la PC y ejecuta todas las acciones que existen.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Fondo1} alt="Fondo3" className="Img-carrusel" />
        <Carousel.Caption>
          <h2>Round-Robin</h2>
          <h6>
          Es un algoritmo de planificacion de procesos.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Fondo1} alt="Fondo1" className="Img-carrusel" />
        <Carousel.Caption>
          <h2>Quantum</h2>
          <h6>
          Es el numero máximo de intervalos de tiempo que un proceso puede utilizar la CPU.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Fondo1} alt="Fondo3" className="Img-carrusel" />
        <Carousel.Caption>
          <h2>Memoria</h2>
          <h6>
          Es la cantidad de memoria disponible dentro del procesador mismo para almacenar datos y realizar operaciones.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>    
      <Carousel.Item>
        <img src={Fondo1} alt="Fondo3" className="Img-carrusel" />
        <Carousel.Caption>
          <h2>Tiempo de llegada(TL)</h2>
          <h6>
          Es el intervalo de tiempo en que comienza el proceso.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>
  );
}
export default Banner;
