import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function Procesos(props) {
  const procesos = props.procesos;

  return (
    <>
      {procesos.length > 0 ? (
        <div className="Procesos">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID Proceso</th>
                <th>Prioridad</th>
                <th>Tiempo estimado</th>
                <th>Quantum asignado</th>
              </tr>
            </thead>
            <tbody>
              {procesos.map((proceso, i) => (
                <tr key={i}>
                  <td>{proceso.id}</td>
                  <td>{proceso.prioridad}</td>
                  <td>{proceso.duracion}</td>
                  <td>{proceso.memoria}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="Procesos">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID Proceso</th>
                <th>Prioridad</th>
                <th>Duración</th>
                <th>Memoria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

Procesos.propTypes = {
  procesos: PropTypes.array.isRequired,
};

Procesos.defaultProps = {
  procesos: [],
};

export default Procesos;
