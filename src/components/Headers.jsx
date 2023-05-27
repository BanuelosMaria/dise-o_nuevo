import React from "react";
import Logoescolar from "../Imagenes/Logoescolar.png";
import Stack from "react-bootstrap/Stack";

function Header() {
  return (
    <div className="App-header">
      <Stack direction="horizontal" gap={3} className="App-he">
        <div>
          {" "}
          <img src={Logoescolar} width={70} height={70} alt="70x70" />
        </div>
        <div>Round Robin con Prioridad y Retroalimentación</div>
        <div className="ms-auto"></div>
      </Stack>
    </div>
  );
}
export default Header;
