import Alunos from './components/Alunos/Alunos';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import MsgUsuario from './components/MensagemUsuario/MsgUsuario';
import UseStateHook from './components/UseStateHokk/UseStateHook';
import Contador from './components/Contador/Contador';

function App() {
  // const objeto = 
  // {
  //   id: 1, 
  //   nome:'João'
  // };

  // const styles = 
  // {
  //   containerFrutas: 'classe-azul',
  //   'container-legumes': 'classe-verde'
  // };


  return(
  <>
  
  {/* <Alunos nome={'ivo'} idade={17} ativo={true}/>
  <Alunos nome={'ivo'} idade={17}/>
  <Alunos nome={'ivo'} idade={17}/>

  <Button text={'Cadastro'}/>
  <Button text={'Relatorio'}/>


  <Card></Card> */}


  {/* <p>Ponto: {objeto.nome}</p>
  <p>Colchetes: {objeto['nome']}</p>

  <p>Ponto: {styles.containerFrutas}</p>
  <p>Colchetes: {styles['container-legumes']}</p> */}

  {/* <MsgUsuario nomeUsuario={'SENAI'}/>
  <MsgUsuario autenticado = {true} nomeUsuario={'SENAI'}/>
 */}

 {/* <UseStateHook /> */}
 <Contador/>
 

  

  </>

  );
}

 export default App


