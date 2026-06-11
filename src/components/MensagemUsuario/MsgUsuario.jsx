import styles from "./MsgUsuario.module.css"

function MsgUsuario ({autenticado=false, nomeUsuario}){
    
    // return(autenticado ? <h1 className= {styles.autenticado}>Bem Vindo, {nomeUsuario}</h1>:
    //                 <h1 className={styles['naoAutenticado']}>Usuario não encontrado</h1>)

    const msgAutenticado = <h1 className= {styles.autenticado}>Bem Vindo, {nomeUsuario}</h1>;
    const msgNautenticado =  <h1 className={styles['naoAutenticado']}>Usuario não encontrado</h1>

    return(autenticado ? msgAutenticado : msgNautenticado)



}


export default MsgUsuario