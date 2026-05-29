import Alunos from './components/Alunos/Alunos';
import Button from './components/Button/Button';


function App() {


  return(
  <>
  
  <Alunos nome={'ivo'} idade={17} ativo={true}/>
  <Alunos nome={'ivo'} idade={17}/>
  <Alunos nome={'ivo'} idade={17}/>

  <Button text={'Cadastro'}/>
  <Button text={'Relatorio'}/>

  </>

  )
}

 export default App


