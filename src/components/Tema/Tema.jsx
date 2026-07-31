import { useState, useEffect } from "react";
import styles from "./Tema.module.css";


function Tema () {
    // CASOS DE USO DO useState

    // caso 1: contador
    const [contador, setContador] = useState(0);

    // caso 2: texto digitado pelo usuario
    const [nome, setNome] = useState("");

    // caso 3: controle de tema
    const [temaEscuro, setTemaEscuro] = useState(false);

    // CASOS DE USO DO useEffect

    // caso 1: executa apenas uma vez, ao carregar o componente
    useEffect(() => {
        console.log("Componente carregado pela primeira vez");
    }, []);

    // caso 2: executa sempre que o contador mudar
    useEffect(() => {
        console.log('O contador foi acionado: ', contador)
    }, [contador]);

    // caso 3: executa sempre que o tema mudar
    useEffect(() => {
        console.log("Tema alterado:", temaEscuro ? "Escuro" : "Claro");
    }, [temaEscuro]);

    // função para aumentar o contador
    function aumentarContador() {
        setContador(contador + 1);
    }

    // função para diminuir o contador
    function diminuirContador() {
        setContador(contador - 1);
    }

    // função para alternar o tema
    function alternarTema() {
        setTemaEscuro(!temaEscuro);
    }

    return(
        <main className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

    {/* caso 1: contador */}
            <section className={styles.card}>
                <h2 >1. Contador (useState)</h2>
                <p className={styles.valor}>{contador}</p>
                <div className={styles.botoes}>
                <button className={styles.botaoTema} onClick={aumentarContador}>+</button>
                <button className={styles.botaoTema}  onClick={diminuirContador}>-</button>
                </div>
                <p>O useEffect observa a variável <strong>contador</strong> e executa sempre que ele muda.</p>
            </section>

    {/* campo de texto */}
            <section className={styles.card}>
                <h2>2. Campo de texto (useState)</h2>
                <input className={styles.input} type="text" placeholder="Digite seu nome" value={nome} onChange={(digitado)=>setNome(digitado.target.value)} />
                <p>Olá, <strong>{nome || 'visitante'}</strong>!</p>
            </section>

            <section className={styles.card}>
                <h2>3. Alternância de tema (useState)</h2>
                <button className={styles.botaoTema} onClick={alternarTema}>Alternar tema para tema {temaEscuro ? 'Claro' : 'Escuro'}</button>
                <p>O useEffect observa a variável <strong>temaEscuro</strong> e executa sempre que o tema é alterado.</p>
            </section>
        </main>
    );
}

export default Tema
