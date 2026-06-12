
import { useState } from "react"



function UseStateHook (){
    const [nome, setNome] = useState('Clique em mudar.');
    const [idade, setIdade] = useState(0);
    const [eFalso, setFalso] = useState(false);
    const [fruta, setFruta] = useState();



    const atualizarNome = () =>{
        setNome('Helena');

    }

   
    const atualizarIdade = () =>{
        setIdade(idade + 1);
    }

   
    const verificarEstado = () =>{
        setFalso(!eFalso);
    }

    const mostrarFruta = () =>{
        setFruta('Morango');
    }
    
    

    return(
    
    <div>
        <p>Nome: {nome}</p>
        <button onClick={atualizarNome}>Mudar</button>

        <p>Idade: {idade}</p>
        <button onClick={atualizarIdade}>Incrementar</button>

        <p>Falso: {eFalso ? 'SIM' : 'NAO'}</p>
        <button onClick={verificarEstado}>Verificar</button>

        <p>Fruta Secreta: {fruta}</p>
        <button onClick={mostrarFruta}>Fruta Secreta</button>

    </div>
   
    )
}
export default UseStateHook
