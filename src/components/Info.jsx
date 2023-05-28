import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Noticia1 from '../Imagenes/noticia 1.jpg';
import Noticia2 from '../Imagenes/noticia 2.png';
import Noticia3 from '../Imagenes/noticia3.png';
import Noticia4 from '../Imagenes/noticia4.png';
import Noticia5 from '../Imagenes/Noticia5.jpg';
import Noticia6 from '../Imagenes/noticia6.png';
import { Stack } from "react-bootstrap";
import '../css/App.css';


function Info (){
    return(      
        <div className="App-titulo" >
          <div className="fondo-info">
            <h1>NOTICIAS INFORMATIVAS </h1>
          </div>          
          <div className="App-info">
          <div className="App-Info1">
            <Card style={{ width: '25rem' }} className="Card-info">
        <Card.Img variant="top" src={Noticia1} />
      <Card.Body>
        <Card.Title>Ryzen Embedded 5000 para sistemas de red son presentados con núcleos Zen 3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Gustavo Gamarra</Card.Subtitle>
        <Card.Text>
        Los núcleos Zen 3 regresan en el año 2023 con las series de procesadores Ryzen Embedded 5000. Estos procesadores están diseñados para 
        sistemas de red y van a ofrecer hasta 16 núcleos.
        </Card.Text>
        <Card.Link href="https://www.profesionalreview.com/2023/04/21/ryzen-embedded-5000-zen-3/">Ver mas...</Card.Link>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }} className="Card-info">
    <Card.Img variant="top" src={Noticia2} />
      <Card.Body>
        <Card.Title>Si tu PC se congela cuando juegas, el problema sería la temperatura del procesador</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Roberto Sole</Card.Subtitle>
        <Card.Text>
        Es posible que, en alguna ocasión, sobre todo en verano, hayas notado caída de FPS repentinas o congelaciones del ordenador. 
        Lo más probable es que el problema este en la temperatura del procesador por falta del mantenimiento. Concretamente, 
        estos problemas vendrían dados por el parámetro «Tjunction» de la CPU, el cual debes conocer y entender.
        </Card.Text>
        <Card.Link href="https://hardzone.es/noticias/procesadores/problemas-pc-juegos-temperatura-procesador/">Ver mas...</Card.Link>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }} className="Card-info">
    <Card.Img variant="top" src={Noticia3} />
      <Card.Body>
        <Card.Title>Intel trabaja en un disipador de hasta 2.000 W para sus procesadores</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Roberto Sole</Card.Subtitle>
        <Card.Text>
        El número de núcleos en los procesadores ha ido aumentando de manera notable en los últimos años. Dicho proceso ha conllevado un 
        importante aumento de la generación de calor de estos componentes, requiriendo soluciones de disipación de calor cada vez más grandes. 
        Pues bien, Intel actualmente estaría trabajando en nuevos disipadores para sus procesadores con nuevos materiales para un TPD de hasta 
        2000W.
        </Card.Text>
        <Card.Link href="https://hardzone.es/noticias/procesadores/intel-disipador-2000-w-procesadores/">Ver mas...</Card.Link>
      </Card.Body>
    </Card>
            </div>

            <div className="App-Info2">
            <Card style={{ width: '25rem' }} className="Card-info">
        <Card.Img variant="top" src={Noticia4} />
      <Card.Body>
        <Card.Title>Se confirman los procesadores que llevarán los POCO F5 y POCO F5 Pro</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ADAN</Card.Subtitle>
        <Card.Text>
        Si los rumores no fallan, los POCO F5 y POCO F5 serán presentados en las próximas semanas. Dos nuevos terminales 
        destinados a la gama media y media-alta, de los que ya sabemos con seguridad sus procesadores tras su paso por GeekBench.
        </Card.Text>
        <Card.Link href="https://www.xiaomiadictos.com/se-confirman-los-procesadores-que-llevaran-los-poco-f5-y-poco-f5/">Ver mas...</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }} className="Card-info">
    <Card.Img variant="top" src={Noticia5} />
      <Card.Body>
        <Card.Title>AMD Ryzen 8000: todo lo que sabemos hasta el momento</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Isaac Romero Torres</Card.Subtitle>
        <Card.Text>
        a nueva serie AMD Ryzen 8000 es todo un misterio para muchos, sin embargo, poco a poco se han ido conociendo 
        detalles sobre la microarquitectura Zen 5 y sobre lo que podría ser esta nueva CPU con nombre clave Nirvana.
        </Card.Text>
        <Card.Link href="https://www.profesionalreview.com/2023/04/19/amd-ryzen-8000-toda-informacion/">Ver mas...</Card.Link>

      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }}className="Card-info"> 
    <Card.Img variant="top" src={Noticia6} />
      <Card.Body>
        <Card.Title>Los mejores procesadores del momento por rango de precio gaming, diseño, abril 2023</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">David</Card.Subtitle>
        <Card.Text>
        Si estás deseando cambiar de PC y no sabes qué procesador elegir, quizás esta pequeña guía te ayude a decidirte.
        </Card.Text>
        <Card.Link href="https://www.geektopia.es/es/technology/2013/05/08/noticias/los-mejores-procesadores-para-jugar-por-rango-de-precio-mayo-2013.html">Ver mas...</Card.Link>
      </Card.Body>
    </Card>
            </div>  

          </div>                    
        </div>
    );
}
export default Info;