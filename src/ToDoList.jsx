import { useState } from "react"


function ToDoList() {
    const[inputValue,setInputValue] = useState('here is my todo liste')
    const[todos, setTodo] = useState([''])

   

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
            />
            <button onClick={()=>{
                setTodo([...todos,inputValue])
                setInputValue('')
                
            }} >ADD TODO</button>
            <ul>
                {todos.map(
                    (todos, index) => <li key={index}>{todos}</li>
                )}
            </ul>
        </>
    )
};


export default ToDoList