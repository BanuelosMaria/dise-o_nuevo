import React from "react";
import { Stack } from "react-bootstrap";
import '../css/App.css';
import Procesador1 from '../Imagenes/procesador2.png';
import Procesador2 from '../Imagenes/procesador3.jpg';


function RoundRobin (){
    return(
        <div className="App-RR">
            <h1> Round-Robin con prioridad </h1>
            <h6>¿Qué es?</h6>
            <Stack direction="horizontal" gap={2} >
                <div className="Info-RR">
                <p className="text-justify">
                En un modelo de cinco estados, "round-robin con prioridad" es un 
                algoritmo de planificación utilizado en sistemas operativos para determinar 
                el orden de ejecución de los procesos. En este caso, el algoritmo es round-robin, 
                lo que significa que cada proceso se ejecuta durante un intervalo de tiempo predeterminado, 
                llamado "quantum", antes de pasar al siguiente proceso en la cola.
                </p>
                <p className="text-justify">
                    La prioridad entra en juego cuando hay múltiples procesos compitiendo 
                    por el uso del procesador. Cada proceso tiene asignada una prioridad, que determina 
                    qué proceso se selecciona para su ejecución cuando varios están listos para ejecutarse. 
                    El algoritmo de round-robin con prioridad asegura que los procesos de alta prioridad se 
                    ejecuten antes que los de baja prioridad dentro de cada intervalo de tiempo.
                    </p>
                    <p className="text-justify">
                    El "quantum" es el lapso de tiempo durante el cual un proceso se ejecuta antes de que 
                    se le dé paso a otro proceso. Una vez que un proceso ha consumido su quantum, se suspende 
                    y se coloca nuevamente en la cola de procesos listos para ejecutarse. El quantum es una 
                    medida de tiempo predeterminada y es una forma de asignar el tiempo del procesador de manera 
                    justa entre los procesos.
                    </p>
            </div>

            <div className="IMG-RR">
                <img src={Procesador1} width={350} height={300} alt="350x300"/>
            </div>
            </Stack>

            <Stack direction="horizontal" gap={2}>
            <div className="IMG-RR">
            <img src={Procesador2} width={350} height={300} alt="350x300"/>
                </div>
                <div className="Info-RR">
                    <p className="text-justify">
                La memoria del procesador se refiere a la cantidad de memoria disponible dentro del procesador mismo 
                para almacenar datos y realizar operaciones. La memoria del procesador se divide en diferentes niveles 
                de caché, donde cada nivel tiene diferentes tamaños y velocidades de acceso. Los niveles de caché más cercanos 
                al núcleo del procesador tienen menor capacidad pero mayor velocidad de acceso, mientras que los niveles más alejados 
                tienen mayor capacidad pero menor velocidad.  
                    </p>
                    <p className="text-justify">
                    La memoria del procesador es esencial para almacenar y acceder rápidamente a los datos necesarios durante 
                    la ejecución de los procesos. Un acceso más rápido a la memoria del procesador ayuda a mejorar el rendimiento 
                    general del sistema, ya que reduce la latencia de acceso a los datos. La organización y capacidad de la memoria 
                    del procesador varían según la arquitectura y el diseño específicos del procesador.
                    </p>
                </div>
            </Stack>            
        </div>
    );
}
export default RoundRobin;