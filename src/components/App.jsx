import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Procesos from './Procesos';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import Header from './Headers';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Banner from '../components/Banner';
import Footer from './Footer';

function App() {

    /* 
      * IMPORTANTE:
        * 5 tablas:
          * Nuevo
          * Listo
          * Ejecutando
          * Bloqueado
          * Terminado / Salida
    */

  /*
    TODO actualizar correctamente el tiempo estimado
  */

  const intervalId = useRef(null);
  const [TIEMPO_TEMPORIZADOR_MS] = useState(1000);
  // State con objeto que almacena el proceso en creación.
  const [proceso, setProceso] = useState({
    id: '',
    prioridad: '',
    tiempo_estimado: '',
    quantum_asignado: ''
  });
  // State con la lista de procesos creados.
  const [procesos_nuevo, setNuevo] = useState([
    { id: 1, prioridad:3, duracion: 10, memoria: 500 },
    { id: 2, prioridad:1, duracion: 15, memoria: 1000 },
    { id: 3, prioridad:5, duracion: 20, memoria: 1500 },
  ]);
  const [procesos_listo, setListo] = useState([]);
  const [procesos_ejecucion, setEjecucion] = useState([]);
  const [procesos_lecturadisco, setLecturaDisco] = useState([]);
  const [procesos_teclado, setTeclado] = useState([]);
  const [procesos_impresora, setImpresora] = useState([]);
  const [procesos_finalizados, setFinalizados] = useState([]);
  const [numero_procesos_iniciales, setNumeroProcesosIniciales] = useState(0);
  const [numero_procesos_finalizados, setNumeroProcesosFinalizados] = useState(0);
  const [quantum, setQuantum] = useState('');
  const [memoria, setMemoria] = useState('');
  const [tiempo_ejecucion, setTiempoEjecucion] = useState(0);
  const [isInsertandoDatos, setIsInsertandoDatos] = useState(false);
  const [isTemporizadorActivado, setIsTemporizadorActivado] = useState(false);
  const [isProcesoEnEjecucion, setIsProcesoEnEjecucion] = useState(false);

  const actualizarQuantum = (event) => {
    event.target.value !== '' ?
    setQuantum(parseFloat(event.target.value)):
    setQuantum('');
  }

  const actualizarMemoria = (event) => {
    event.target.value !== '' ?
    setMemoria(parseFloat(event.target.value)):
    setMemoria('');
  }

  const actualizarIsInsertandoDatos = (event) => {
    event.preventDefault();

    if (quantum === '' || memoria === '') {
      alert('Alguno de los datos está vacío');
    }
    else {
      setIsInsertandoDatos(true);
    }
  }

  // Guarda los valores ingresados de los inputs en el state 'proceso'.
  const guardarCambiosProceso = (event) => {
    setProceso({
      ...proceso,
      [event.taget.name]: event.target.value
    })
  }

  // Agrega el proceso creado a la lista 'Nuevo' validando los datos ingresados.
  const actualizarProcesos = (event) => {

    alert('hola');
    // event.preventDefault();

    // const { id, prioridad, tiempo_estimado, quantum_asignado } = proceso;

    // if (id === 0 || prioridad === 0 || tiempo_estimado === 0 || quantum_asignado === 0) {
    //   alert('Rellena todos los campos del proceso a crear');
    // }
    // else {
    //   const temporal = procesos_nuevo;

    //   setNuevo([
    //     ...temporal,
    //     proceso
    //   ]);

    //   setProceso({
    //     id: '',
    //     prioridad: '',
    //     tiempo_estimado: '',
    //     quantum_asignado: ''
    //   })
    // }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //aca cierra
  const ordenarProcesosPrioridad = (procesos_a_ordenar) => {
    const procesos_ordenados = procesos_a_ordenar.sort((proceso_1, proceso_2) => proceso_1.prioridad - proceso_2.prioridad);

    return procesos_ordenados;
  }

  const cargarProcesosNuevoListo = () => {
    var memoria_actual = memoria;
    var numero_procesos_dentro = numero_procesos_iniciales;
    const procesos_a_cargar = procesos_nuevo.map(proceso => {
      if (memoria_actual - proceso.memoria >= 0)
      {
        memoria_actual = memoria_actual - proceso.memoria;
        numero_procesos_dentro = numero_procesos_dentro + 1;
        return {...proceso};
      }
    });
    const procesos_orden_prioridad = ordenarProcesosPrioridad(procesos_a_cargar);
    setNuevo([]);
    setMemoria(memoria_actual);
    setNumeroProcesosIniciales(numero_procesos_dentro);
    setListo(procesos_orden_prioridad);
    setIsTemporizadorActivado(true);
  }
  
  // TODO REVISAR CADA METODO QUE MANEJA INTERRUPCIONES, GENERAN BUGS DE RENDER
  // * BEGIN bugs
  const eliminarInterrupcion = () => {
    if (
      procesos_lecturadisco.length > 0 ||
      procesos_teclado.length > 0 ||
      procesos_impresora.length > 0
    ) {
      const RANDOM_NUMBER = Math.random() * 10000;
      if (RANDOM_NUMBER >= 0 && RANDOM_NUMBER <= 2500) {
        if (procesos_lecturadisco.length > 0) {
          eliminarInterrupcionDisco();
        }
      } else if (RANDOM_NUMBER >= 2501 && RANDOM_NUMBER <= 5000) {
        if (procesos_teclado.length > 0) {
          eliminarInterrupcionTeclado();
        }
      } else if (RANDOM_NUMBER >= 5001 && RANDOM_NUMBER <= 7500) {
        if (procesos_impresora.length > 0) {
          eliminarInterrupcionImpresora();
        }
      }
    }
  };
  
  const eliminarInterrupcionDisco = useCallback(() => {
    const procesos_lecturadisco_actuales = [...procesos_lecturadisco];
    const proceso_interrumpido = procesos_lecturadisco_actuales.shift();
    const procesos_desordenados = procesos_listo.concat(proceso_interrumpido);
    const procesos_ordenados = ordenarProcesosPrioridad(procesos_desordenados);
  
    setLecturaDisco(procesos_lecturadisco_actuales);
    setListo(procesos_ordenados);
  }, [procesos_lecturadisco, procesos_listo]);
  
  const eliminarInterrupcionTeclado = useCallback(() => {
    const procesos_teclado_actuales = [...procesos_teclado];
    const proceso_interrumpido = procesos_teclado_actuales.shift();
    const procesos_desordenados = procesos_listo.concat(proceso_interrumpido);
    const procesos_ordenados = ordenarProcesosPrioridad(procesos_desordenados);
  
    setTeclado(procesos_teclado_actuales);
    setListo(procesos_ordenados);
  }, [procesos_teclado, procesos_listo]);
  
  const eliminarInterrupcionImpresora = useCallback(() => {
    const procesos_impresora_actuales = [...procesos_impresora];
    const proceso_interrumpido = procesos_impresora_actuales.shift();
    const procesos_desordenados = procesos_listo.concat(proceso_interrumpido);
    const procesos_ordenados = ordenarProcesosPrioridad(procesos_desordenados);
  
    setImpresora(procesos_impresora_actuales);
    setListo(procesos_ordenados);
  }, [procesos_impresora, procesos_listo]);
  
  const determinarInterrupcion = () => {
    const RANDOM_NUMBER = Math.random() * 10000;
    if (RANDOM_NUMBER >= 0 && RANDOM_NUMBER <= 2500) {
      interrupcionEjecucionDisco();
    } else if (RANDOM_NUMBER >= 2501 && RANDOM_NUMBER <= 5000) {
      interrupcionEjecucionTeclado();
    } else if (RANDOM_NUMBER >= 5001 && RANDOM_NUMBER <= 7500) {
      interrupcionEjecucionImpresora();
    }
  };
  
  // * END bugs
  
  const interrupcionEjecucionDisco = useCallback(() => {
    const proceso_actual = procesos_ejecucion;
      
      if (procesos_lecturadisco.length >= 1) {
        setLecturaDisco([...procesos_lecturadisco, proceso_actual[0]]);
        setEjecucion([]);
        setIsProcesoEnEjecucion(false);
      }
      else {
        setLecturaDisco([proceso_actual[0]]);
        setEjecucion([]);
        setIsProcesoEnEjecucion(false);
      }
    }, [procesos_ejecucion, isProcesoEnEjecucion])
  
  const interrupcionEjecucionTeclado = useCallback(() => {  
    const proceso_actual = procesos_ejecucion;
  
      if (procesos_teclado.length >= 1) {
        setEjecucion([]);
        setTeclado([...procesos_teclado, proceso_actual[0]]);    
        setIsProcesoEnEjecucion(false);
      }
      else {
        setEjecucion([]);
        setTeclado([proceso_actual[0]]);
        setIsProcesoEnEjecucion(false);
      }
    }, [procesos_ejecucion, isProcesoEnEjecucion])

  const interrupcionEjecucionImpresora = useCallback(() => {  
    const proceso_actual = procesos_ejecucion;
  
      if (procesos_impresora.length >= 1)
      {
        setImpresora([...procesos_teclado, proceso_actual[0]]);
        setEjecucion([]);
        setIsProcesoEnEjecucion(false);
      }
      else {
        setImpresora([proceso_actual[0]]);
        setEjecucion([]);
        setIsProcesoEnEjecucion(false);
      }
    }, [procesos_ejecucion, isProcesoEnEjecucion])

  const cargarProcesoListoEjecucion = useCallback(() => {
      const procesos_listos_actuales = procesos_listo;
      const proceso_actual = procesos_listos_actuales[0];
      const nuevos_procesos_listo = procesos_listos_actuales.splice(1)
  
      setEjecucion([proceso_actual]);
      setListo(nuevos_procesos_listo);
      setIsProcesoEnEjecucion(true);
    }, [procesos_listo]) 
     
  const actualizarProcesoEjecucion = useCallback(() => {
        const proceso_actual = procesos_ejecucion[0];
        const duracion_actual = proceso_actual.duracion - 1;
        const tiempo_ejecucion_actual = tiempo_ejecucion + 1;
        const memoria_actual = memoria + proceso_actual.memoria;
        const procesos_listos_actuales = procesos_listo;
        const procesos_desordenados = procesos_listos_actuales.concat({...proceso_actual, duracion: duracion_actual});
        const procesos_ordenados = ordenarProcesosPrioridad(procesos_desordenados);
        const numero_procesos_finalizados_actual = numero_procesos_finalizados - 1;
    
        // * REVISION SOBRE TIEMPO DEL PROCESO Y EL QUANTUM GLOBAL
        if (tiempo_ejecucion_actual <= quantum) {
            // ? SI ES MAYOR QUE quantum...
            if (duracion_actual > 0){
              // ? SI LA duracion_actual del proceso en ejecución es mayor a 0...
              // ?  reescribir la duracion del proceso en ejecución
              setIsProcesoEnEjecucion(true);
              setTiempoEjecucion(tiempo_ejecucion);
              setEjecucion([{...proceso_actual, duracion: duracion_actual}]);
            }
            else {
              // ? SI EL PROCESO SE TERMINO DE EJECUTAR
              // ? SE PONE HUECO prcoesos_ejecucion, se cambia la bandera del mismo, se actualiza la memoria y se agregan estados finales

              if (procesos_finalizados.length > 0)
              setFinalizados([...procesos_finalizados , {...proceso_actual, duracion: duracion_actual}]);
              else
              setFinalizados([{...proceso_actual, duracion: duracion_actual}]);
              setEjecucion([]);
              setNumeroProcesosFinalizados(numero_procesos_finalizados_actual);
              setIsProcesoEnEjecucion(false);
              setMemoria(memoria_actual);
              setTiempoEjecucion(0);
            }
        } else {
          setIsProcesoEnEjecucion(false);
          setTiempoEjecucion(0);
          setListo(procesos_ordenados);
          setEjecucion([]);
        }
      }, [procesos_finalizados, procesos_ejecucion, tiempo_ejecucion])
      /**
       * else {
        setIsProcesoEnEjecucion(false);
        setTiempoEjecucion(0);
      }
       */

  /**
   * ? Acorde a la documentación pertinente, useEffect se ejecutará cada vez que se altere el DOM,
   * ?  esto incluye cada actualización del useState() que hace que se aparezcan dichos errores
   * ?  y tambien es mejor para la legibilidad de codigo segmentar la información...
   * * https://dmitripavlutin.com/react-useref/
   * * https://stackoverflow.com/questions/60131947/stopping-a-timer-in-useeffect
   * * https://medium.com/@guptagaruda/react-hooks-understanding-component-re-renders-9708ddee9928
   * * https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
   */
  
  // TODO agregar actualizacion de valores cuando solo queda un solo proceso a ejecutar
  useEffect(() => {
      intervalId.current = setInterval(() => {
        const RANDOM_NUMBER_1 = Math.random() * 10000;
        const RANDOM_NUMBER_2 = Math.random() * 5000;     
        if (isTemporizadorActivado) {
            if (procesos_listo.length > 0 && isProcesoEnEjecucion === false)
              cargarProcesoListoEjecucion();

            if (isProcesoEnEjecucion === true && tiempo_ejecucion < quantum)
            {
              actualizarProcesoEjecucion();
              if (RANDOM_NUMBER_1 >= 5001 && RANDOM_NUMBER_2 <= 2500)
                determinarInterrupcion();
            }

            if (isProcesoEnEjecucion === true && tiempo_ejecucion === quantum)
            {
              actualizarProcesoEjecucion()
              cargarProcesoListoEjecucion();
            }
            
            eliminarInterrupcion();

            if (numero_procesos_finalizados >= numero_procesos_iniciales) {
              setIsTemporizadorActivado(false);
            }
          }
      }, TIEMPO_TEMPORIZADOR_MS);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId.current); 
  }, [
    isTemporizadorActivado,
    isProcesoEnEjecucion,
    tiempo_ejecucion,
    procesos_ejecucion,
    procesos_listo,
    procesos_finalizados,
    procesos_lecturadisco,
    procesos_impresora,
    procesos_teclado,
    actualizarProcesoEjecucion,
    cargarProcesoListoEjecucion
  ]);

  // * Considerar que falta agregar formulario para escribir datos para los procesos
  return (
    <div className="App">
      <Header/>
      <Banner/>
    {/*Parte donde esta formulario y tablas de nuevo */}
    <div className="App-body">
      <Stack direction="horizontal" gap={2} className='stack-proceso'>
        <div>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Datos del proceso</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ingrese el valor del Quantum y memoria</Card.Subtitle>
                  <Card.Text>
                    {/*formulario de memoria insertar modal para el formulario de los demas procesos */}
                    <Form onSubmit={actualizarIsInsertandoDatos}>
                      <FormGroup className='Datos-Quantum'>
                        <div>
                          <Form.Label>Quantum</Form.Label>
                            <Form.Control type='number'
                              placeholder='Ej: 12'
                              onChange={actualizarQuantum}
                              value={quantum}
                              name="quantum"
                              disabled={isInsertandoDatos}>                                
                            </Form.Control>
                          </div>
                      </FormGroup>

                      <FormGroup className='Datos-Memoria'>
                        <div>
                          <Form.Label>Memoria</Form.Label>
                            <Form.Control type='number'
                              placeholder='Ej: 5'
                              onChange={actualizarMemoria}
                              value={memoria}
                              name="memoria"
                              disabled={isInsertandoDatos}>
                            </Form.Control>
                        </div>
                      </FormGroup> 
                      <div>
                      <button class="button-27" role="button" type='submit' disabled={isInsertandoDatos}>Guardar</button>                    
                      </div>               
                    </Form>                    
                  </Card.Text>
                  <button class="button-27" role="button" onClick={() => cargarProcesosNuevoListo()}>Iniciar</button>
            </Card.Body>
          </Card> 
        </div>

        {/*Agregar procesos*/}
        <div className='ms-auto'>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Procesos</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ingrese los siguientes procesos</Card.Subtitle>
                  <Card.Text>                    
                    <Form onSubmit={actualizarProcesos}>
                      <FormGroup className='Datos-id'>
                        <div>
                          <Form.Label>ID</Form.Label>
                            <Form.Control type='number'
                              placeholder='Ej: 7'
                              onChange={guardarCambiosProceso}
                              value={proceso.id}
                              name='id'>                                
                            </Form.Control>
                          </div>
                      </FormGroup>

                      <FormGroup className='Datos-prioridad'>
                        <div>
                          <Form.Label>Prioridad</Form.Label>
                            <Form.Control type='number'
                              placeholder='Ej: 1-5'                              
                              name='prioridad'
                              value={proceso.prioridad}
                              onChange={guardarCambiosProceso}>
                            </Form.Control>
                          </div>
                      </FormGroup>

                      <FormGroup className='Datos-TE'>
                        <div>
                          <Form.Label>Tiempo estimado</Form.Label>
                            <Form.Control
                              type='number'
                              placeholder='Ej: 20'                              
                              name="duracion"
                              value={proceso.tiempo_estimado}
                              onChange={guardarCambiosProceso}>
                            </Form.Control>
                          </div>
                      </FormGroup>

                      <FormGroup className='Datos-Quantum'>
                        <div>
                          <Form.Label>Quantum asignado</Form.Label>
                            <Form.Control
                              type='number'
                              placeholder='Ej: 250'                              
                              name="memoria"
                              // SI SE ELIMINA O COMENTA ESTE ATRIBUTO DEL INPUT, SI SE PUEDE ESCRIBIR
                              // EN EL MISMO, SI SE DEJA O DESCOMENTA, NO DEJA ESCRIBIR.
                              //value={proceso.quantum_asignado}
                              onChange={guardarCambiosProceso}>
                            </Form.Control>
                          </div>
                      </FormGroup>
                      <div>
                        <button class="button-27" role="button" type='submit'>Guardar</button>                    
                      </div>               
                    </Form>                    
                  </Card.Text>                                                                 
            </Card.Body>
          </Card> 
        </div>
      </Stack>

        {/*Procesos-Bloqueo-final */}
      <div className='Procesos-bloqueo-final'>
        {/*Listo y en ejecucion */}
      <div className='Proceso-listo'>
        <Card style={{ width: '100rem' }} className='procesos-card'>
          <Card.Body>
            <Card.Title>Procesos</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Tras mandar la orden, los procesos van iniciando conforme su nivel de prioridad</Card.Subtitle>
            <Card.Text>
              <Stack direction="horizontal" gap={3} className='Procesos'>
                {/*Tabla de listos */}
          <div className='Procesos-nuevos'>
                <h4>Nuevos</h4>
                  <Procesos procesos={procesos_nuevo}/>
                    </div>
                <div className='Procesos-Listos'>
                  <h4>Listos</h4>
                    <Procesos procesos={procesos_listo}/>
                </div>

                <div className='Procesos ejecucion'>
                  <h4>En Ejecución</h4>
                    <Procesos procesos={procesos_ejecucion}/>
                </div>   
              </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>       


          <Card style={{widows: '100'}} className='Bloqueos-Card'>
            <Card.Body>
              <Card.Title>Bloqueados</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Algunos procesos pueden llegar a ser detenidos debido a algun problema ya sea en este caso del teclado, impresora e incluso lectura del disco</Card.Subtitle>
              <Card.Text>
                <Stack direction="horizontal" gap={3} className='Bloqueos'>
          
            <div className='Procesos-Bloqueados-LecturaDisco'>
              <h4>Lectura de Disco</h4>
              <Procesos procesos={procesos_lecturadisco}/>
            </div>

            <div className='Procesos-Bloqueados-Teclado'>
              <h4>Teclado</h4>
              <Procesos procesos={procesos_teclado}/>
            </div>

            <div className='Procesos-Bloqueados-Impresora'>
              <h4>Impresora</h4>
              <Procesos procesos={procesos_impresora}/>
            </div>         
          </Stack>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='Finalizado-card'>
          <Card style={{ width: '35rem' }}>
            <Card.Body>
              <Card.Title>Finalizados</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Procesos terminados</Card.Subtitle>
              <Card.Text>
                <div className='Procesos-Finalizados'>
                    <Procesos procesos={procesos_finalizados}/>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>          
        </div>    
      </div>
      <Footer/> 
    </div>
  )
}

export default App;