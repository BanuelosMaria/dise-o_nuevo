import React from "react";

function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Un simulador visual que explica las tareas de un procesador
              (asumiendo el Modelo de Cinco Estados) permite al usuario
              visualizar de forma más clara los pasos a seguir del proceso
              ilustrado y comprender dicho modelo de una forma más clara para
              los estudiantes de la materia de Sistemas Operativos de las
              carreras de Informática y Sistemas Computacionales del Instituto
              Tecnológico de Tijuana y al público en general que esté interesado
              en aprender del tema.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Herramientas utilizadas</h6>
            <ul className="footer-links">
              <li>ReactJS</li>
              <li>Github</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Boostrap</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Mas informacion</h6>
            <ul className="footer-links">
              <li>
                <a href="https://legacy.reactjs.org/docs/getting-started.html">
                  React Docs
                </a>
              </li>
              <li>
                <a href="https://docs.github.com/en">Github Docs</a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                  C# Docs
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                  JavaScript Docs
                </a>
              </li>
              <li>
                <a href="https://react-bootstrap.github.io/">Boostrap Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
