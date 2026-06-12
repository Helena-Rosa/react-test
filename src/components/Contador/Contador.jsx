import { useState } from "react"
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
            setContador(Math.random);
        }

    return (
        <>
            <div>
                <p> {contador}</p>
                <button onClick={reiniciar}>Reiniciar</button>

                
                <button onClick={somar}>Somar Numero</button>

               
                <button onClick={subtrair}>Subtrair Numero</button>

                
                <button onClick={sortear}>Sortear</button>

            </div>
        </>


    )
}

export default Contador


// estudar a logica do contador 