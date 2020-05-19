//Antiguamente antes de react
// //Creamos un elemento
// const element = document.createElement('h1');

// //Le asignamos un texto al elemento
// element.innerText = 'Hello React..';

// //Generamos el contenedor principal
// const container = document.getElementById('root');

// //Agregamos el hijo al contenedor
// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.css";

//Creamos el contenedor
const container = document.getElementById("root");

ReactDOM.render(
  <Card
    title="Mi titulo"
    description="Learn amazing workout and calisthenics"
    image="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
    leftColor="#A74CF2"
    rightColor="617BFB"
  ></Card>,
  container
);
