import { useState } from "react"

export default function TodoList(){

const [todos,setTodos]= useState([{task: "ToDo-1", completed:false}])
 
    function handleSubmit(event){
        event.preventDefault()
        let task=event.target.task.value
        alert("new Todo " + task)

        if(!task){
            alert("Please provide a valid task");
            return
        }
        setTodos([...todos,{task: task, completed: false}])
        event.target.reset()
    }
    
    return(
        <div className="container my-5">
            <div className="mx-auto rounded border p-4"style ={{width:"600px"}}>
            <h2 className="text-black text-center mb-5">ToDo List</h2>
            <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2"  placeholder="Add ToDo..." name="task"/>
        <button type="submit" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}>+</button>
      </form>
      {
        todos.map((todo, index)=>{
            return(
                
                <div key={index} className="rounde mt-4 p-2 d-flex"
                style={{backgroundColor: todo.completed ? "#0fff": "form-control me-2"}}>
                
                
                <div className="me-auto">
                    {todo.task}
                </div>
    
                </div>
            )
        })
      }

            </div>

        </div>
    )
}