import { useEffect, useState } from "react"
import styles from "./Contador.module.css"
function ContadorAuto() {
    const [automatico, setAutomatico] = useState(false);

useEffect(() => {
    let relogio;

    if (automatico) {

        relogio = setInterval (() =>{

            setContador ((valorAtual) => valorAtual + 1);
        }, 1000)
    }


    return () => clearInterval(relogio);

}, [automatico]);


const alternarAutomatico = () =>{
    setAutomatico(!automatico);


}
    const reiniciar= () =>{
            setContador(0);
            setAutomatico(false);

        }

        const somar = () =>{
            setContador(contador + 1);
        }


        const subtrair = () =>{
            setContador(contador - 1);
        }

        const sortear= () =>{
            setContador(Math.floor (Math.random() * (100 - 1 )));
        }


        const valorClasse = () => {
            if (contador > 0) return styles.valorPositivo
            if (contador < 0) return styles.valorNegativo
        }

        const formatarContador = () => {
            if (contador >= 0 && contador < 10) {
                return `0${contador}`;

            }

            return contador;
        }

    return (
        <>  
       
            <div className={styles.formatarContador}>
                 <p className={valorClasse()}> {contador}</p>
                
                <button className= {styles.button1} onClick={reiniciar}>Reiniciar</button>

                
                <button className= {styles.button2}onClick={somar}>Somar Numero</button>

               
                <button className= {styles.button3} onClick={subtrair}>Subtrair Numero</button>

                
                <button className= {styles.button4} onClick={sortear}>Sortear</button>

            </div>
        </>


    )
}

export default Contador


// estudar a logica do contador 