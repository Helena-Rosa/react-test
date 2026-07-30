import { useEffect, useState } from "react"
import style from "./UseEffectHook.module.css"

function UseEffectHook (){

    const [contador, setContador] = useState (0);

    const titulo = 'Clicou'

    console.log ('Sempre ocorre, mas antes do useEffect')

    useEffect (() =>{
        console.log('Ocorre quando rendenizar.')
    });


    useEffect(() =>{
        console.log('Rendenizar apenas na primeira vez.')
    },[]);


    useEffect(() =>{
        console.log('Ocorre quando renderizar o contador')
    },[contador]);


    console.log('Sempre ocorre, mas antes do UseEffact.')









    return <button
                className= {style.contadorButton}
                onClick= {() => setContador (contador + 1 )}>


            {contador}
    </button>
}

export default UseEffectHook