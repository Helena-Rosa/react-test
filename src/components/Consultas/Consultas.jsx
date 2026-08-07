import { useState, useEffect } from "react";
import styles from "./Consultas.module.css"
import Swal from "sweetalert2";


function Botao () {

     const [usuario, setUsuario] = useState ([])

     const [carregando, setCarregando] = useState (false)

     const [erro, setErro] = useState ("")

     const AlertSucesso = () => {
        Swal.fire({
            title: "Os dados foram exibidos com Sucesso!",
            icon: "success",
            draggable: true
    });}


    const ErroURL = () =>{
        Swal.fire({
        icon: "error",
        title: "Erro",
        text: "URL inválida! Verifique o endereço novamente."
        });
    }


     


     const autenticacao = () => {
        Swal.fire({
            title: 'Erro 401!',
            text: 'Usuário não autorizado.',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    };

     const alerta = () => {
        Swal.fire({
            title: 'Erro!',
            text: 'O servidor está apresentando um problema interno',
            icon: 'error',
            confirmButtonText: 'continuar'
        });
    };


    const internet = () => {
        Swal.fire({
            title: "Erro de internet",
            text: "Não foi possivel conectar a servidor. Verifique sua internet.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "tentar novamente"
        }).then((result) => {
            if (result.isConfirmed) (
                window.location.reload()
            );
        });

    }

    async function BuscarUsuarios(){
        setCarregando(true)
        setErro("")
    
        try {
                // const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
                const resposta = await fetch("https://httpbin.org/status/401")

                console.log(resposta)

                if (!resposta.ok) {


                    if (resposta.status === 401) {
                    throw new Error(autenticacao());
                }

                    if (resposta.status === 500) {
                    throw new Error(alerta());
                }

                    
                    throw new Error(ErroURL())

                   
                }


                const dados = await resposta.json()  
                setUsuario (dados)
                AlertSucesso()
                
                
                console.log(dados)
                


            } catch (error){
            console.log(error.message)

            if (error.message === "Failed to fetch" || !navigator.onLine) { 
                internet()


            //     setErro("Não foi possivel conectar ao servidor. Verique sua internet.")
            
            // } else {

            //     setErro(error.message)
            // 
}

        
        } finally {
            setCarregando(false);
        }

    }

    return (
        <main className={styles.container}>

            
            <h1 className={styles.titulo}>Consulta de API</h1>

            <section className={styles.card}>
                <button className={styles.BuscarUsuarios}
                onClick={BuscarUsuarios} 

                disabled = {carregando}>
                    {carregando ? "Consultando" : "Consultar"}
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
                                    <strong>Cidade:</strong> {usuario.address.city}
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