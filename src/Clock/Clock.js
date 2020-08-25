import React, { useState, useEffect } from "react";

export const Clock = () => {
  // Declarando la variable state, quiere decir el elemento que
  // determina el cambio de estado del componente

  const [date, setDate] = useState(new Date());
// se ejecuta del render, y su equivalente a componenteDiMount, se
// refiere a la definicion de la variable que es devuelve una funcion
// como es el que representa elcambio se define a traves de let
// y retorna el procedimiento de cleanup,o en otras palabrael
//componentWillUnmount

  useEffect(() => {
    let timeId = setInterval( () => tick(), 1000 );

    return function cleanup() {
           clearInterval(timeId)
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
