import { useState, useEffect } from "react";
import styles from "./Consultas.module.css"



function Botao () {

     const [usuario, setUsuario] = useState ([])

     const [carregando, setCarregando] = useState (false)

     const [erro, setErro] = useState ("")

    async function BuscarUsuarios(){
        setCarregando(true)
        setErro("")
    
        try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
                console.log(resposta)

                if (!resposta.ok) {

                    if (resposta.status === 500) {
                        throw new Error ("Erro 500: O banco de dados ou servidor falhou.")
                    }

                    if (resposta.status === 401) {
                        throw new Error("Erro 401: Usauário não autorizado.")
                    }

                    throw new Error (`Erro ${resposta.status}: URL não encontrada ou invalida.`);
                }


                const dados = await resposta.json()
                console.log(dados)
                


            } catch (error){
            console.log(error.message)

            if (error.message === "Failed to fetch" || !navigator.onLine) {

                setErro("Não foi possivel conectar ao servidor. Verique sua internet.")
            
            } else {

                setErro(error.message)
            }

        
        } finally {
            setCarregando(false);
        }

    }

    return (
        <main className={styles.container}>

            <h1 className={styles.titulo}>Consulta de API</h1>

            <section className={styles.card}>
                <button>
                </button>

                <h2>Usuários da JSON Placeholder </h2>

                {carregando && <p>Carregando usuarios...</p>}

                {erro && <p className={styles.erro}>{erro}</p>}

                {!carregando && ! erro && (
                    <ul className={styles.lista}>
                        {usuario.map((usuario) =>(
                            <li key ={usuario.id} className={styles.item}>
                                <h3>{usuario.name}</h3>
                                <p>
                                    <strong>Email:</strong> {usuario.email}
                                </p>

                                <p>
                                    <strong>Cidade:</strong> {usuario.adress.city}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
     
    );
    
}


export default Botao