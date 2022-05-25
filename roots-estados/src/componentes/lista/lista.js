import CaixaTexto from "../CaixaDeTexto/caixaDeTexto";
import toDoList from "../ToDoList/ToDoList";


function lista(){
    return(
        <div>
            <h6>Adicionar tarefas:</h6>
            <CaixaTexto placeholder ='Digite aqui uma tarefa'/>
           <toDoList/>
        </div>
        
    )
}
export default lista;