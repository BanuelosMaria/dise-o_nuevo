import React from "react";
import Stack from 'react-bootstrap/Stack';


function Footer(){
    return(
      <div className="site-footer">
         <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Un simulador visual que explica las tareas de un procesador (asumiendo el Modelo de Cinco Estados) permite al usuario visualizar de forma más clara los pasos a seguir del proceso ilustrado y comprender dicho modelo de una forma más clara para los estudiantes de la materia de Sistemas Operativos de las carreras de Informática y Sistemas Computacionales del Instituto Tecnológico de Tijuana y al público en general que esté interesado en aprender del tema.
</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Herramientas utilizadas</h6>
            <ul class="footer-links">
              <li>ReactJS</li>
              <li>Github</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Boostrap</li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Mas informacion</h6>
            <ul class="footer-links">
              <li><a href="https://legacy.reactjs.org/docs/getting-started.html">React Docs</a></li>
              <li><a href="https://docs.github.com/en">Github Docs</a></li>
              <li><a href="https://learn.microsoft.com/en-us/dotnet/csharp/">C# Docs</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/javascript">JavaScript Docs</a></li>
              <li><a href="https://react-bootstrap.github.io/">Boostrap Docs</a></li>
            </ul>
          </div>
        </div>      
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      </div>
    );
}
export default Footer;