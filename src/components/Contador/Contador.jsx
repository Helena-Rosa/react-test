import { useState } from "react"
import styles from "./Contador.module.css"
function Contador() {
    const [contador, setContador] = useState(0);
   

    const reiniciar= () =>{
            setContador(0);

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