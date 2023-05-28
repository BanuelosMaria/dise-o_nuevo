import React from "react";
import { Stack } from "react-bootstrap";
import '../css/App.css';
import Procesador1 from '../Imagenes/procesador4.jpg';


function Modelo5 (){
    return(
        <div className="App-RR">
            <h1> Modelo cinco estados </h1>
            <h6>¿A qué se refiere?</h6>
            <p className="text-justify">
                En el algoritmo de round-robin con prioridad, un proceso pasa por varias fases mientras se ejecuta. 
                A continuación, se explica cada una de estas fases:
                </p>
            <Stack direction="horizontal" gap={2} >
                <div className="Info-RR">
                <ol>
                    <li>
                <p className="text-justify">
                Llegada a la cola de procesos listos: En esta fase, un proceso recién 
                creado o que ha estado bloqueado previamente debido a una espera o 
                E/S, se coloca en la cola de procesos listos para su ejecución. Los 
                procesos en la cola se organizan según su prioridad.
                    </p>                        
                    </li>

                    <li>
                        <p className="text-justify">
                        Selección del proceso: En esta fase, el planificador del sistema 
                        selecciona el siguiente proceso a ejecutar. La selección se realiza 
                        en función de la prioridad asignada a cada proceso. Los procesos de 
                        alta prioridad se seleccionan antes que los de baja prioridad. Si 
                        hay múltiples procesos con la misma prioridad, se utiliza el algoritmo 
                        round-robin para seleccionarlos en orden.
                        </p>
                    </li>

                    <li>
                        <p className="text-justify">
                        Ejecución del proceso: El proceso seleccionado se ejecuta durante un 
                        intervalo de tiempo específico llamado "quantum". Durante este 
                        tiempo, el proceso utiliza el procesador para realizar sus cálculos 
                        y operaciones. Si el proceso no se completa dentro del quantum 
                        asignado, se suspende y se coloca nuevamente en la cola de procesos 
                        listos.
                        </p>
                    </li>

                    <li>
                        <p className="text-justify">
                        Paso a otro proceso: Una vez que el proceso ha utilizado su quantum, 
                        se interrumpe y se pasa al siguiente proceso en la cola de procesos 
                        listos. Esto se hace para asegurar que todos los procesos tengan 
                        oportunidad de ejecutarse de manera justa y equitativa.
                        </p>
                    </li>

                    <li>
                        <p className="text-justify">
                       Finalización o bloqueo del proceso: Un proceso puede finalizar su ejecución 
                        si ha completado todas sus tareas y no tiene más trabajo por hacer. También 
                        puede ser bloqueado si necesita esperar a que ocurra algún evento externo, 
                        como una operación de E/S. En este caso, el proceso se mueve a una cola de 
                        procesos bloqueados hasta que el evento deseado ocurra.
                        </p>
                    </li>
                </ol>
            </div>

            <div className="IMG-RR">
                <img src={Procesador1} width={450} height={400} alt="350x300"/>
            </div>
            </Stack>
            <p className="text-justify">
                    Estas fases se repiten continuamente mientras haya procesos en la cola de procesos listos. 
                    El algoritmo de round-robin con prioridad garantiza que los procesos de alta prioridad 
                    tengan oportunidad de ejecutarse antes que los de baja prioridad, mientras se comparte justamente 
                    el tiempo del procesador entre ellos.
                    </p>        
        </div>
    );
}
export default Modelo5;