import { useState, useEffect } from "react";
import Produto from "./Produto";

function Consulta() {
// Estado que vai controlar a renderização do produto na UI
  

// Inserir o produto no Local Storage
  useEffect(() => {

    
  }, []);

// Recuperar o produto do Local Storage quando o produto for modificado pelo estado
  useEffect(() => {
    
  }, []);

// Extrair o texto do Botão quando o usuário clicar
  function handleClick() {
    
  }

  return (
    <section>
      <h1>Preferência:</h1>

      <button onClick={handleClick}>notebook</button>

      <button onClick={handleClick}>smartphone</button>

      <Produto />

    </section>
  );


}

export default Consulta;