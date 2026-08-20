import { useState, useEffect } from "react";

const Produto = ({ produto }) => {

  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      
      if (!produto) return;

      const resposta = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`
      );

      const listaProdutos = await resposta.json();

      setDados(listaProdutos);
    }

    fetchProduto();
  }, [produto]);

  if (dados === null) {
    return <p>Carregando...</p>;
  }

  return (

    <section>
      <h1>Produto Encontrado...</h1>
      <hr />
      <p>Nome: {dados.nome}</p>
      <hr />
      <p>Valor: R$ {dados.preco}</p>
    </section>


  );
};

export default Produto;


