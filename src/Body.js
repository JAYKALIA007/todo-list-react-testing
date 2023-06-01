import { useState , useEffect } from 'react'
import { todoListObj } from './utils/constants'
const Body = () => {
    const [ todoList , setTodoList ] = useState(todoListObj)
    const [ newTodoName , setNewTodoName ] = useState('')
    let todoCount = 0

    useEffect(()=>{},[todoList , todoCount])

    //early return when todos are not loaded(when we are fetching data)
    if(!todoList) return null

    for(let todo of todoList){
        if(!todo.hide){
            todoCount += 1
        }
    }

    const toggleTodoState = (todo) => {
        for(let i of todoList) {
            if(i.index === todo.index){
                 var index = todoList.indexOf(i)
                 if(index !== -1){
                    let changedTodo = i
                    changedTodo.hide = !i.hide
                    let newTodoList = JSON.parse(JSON.stringify(todoList))
                    newTodoList[index] = changedTodo

                    setTodoList(newTodoList) 
                 }
            }
        }
    }

    const displayList = todoList.map(todo=>{
        return(
            <li data-testid='todo-list-array' className={(todo.hide ? ' line-through	text-gray-300 ' : ' text-gray-800 ') + 'cursor-pointer italic  mx-2 my-4  '} key = {todo.index} 
                onClick={()=>{toggleTodoState(todo)}}>
                   {todo.todoName}
                   <hr/>
            </li>
        )
    })
  return (
    <div className="h-2/3 bg-gray-50 pt-10 ">
        <div className="w-1/3 relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md text-lg ">
                <input 
                    type="text" 
                    placeholder='eg - take a walk' 
                    className=' w-4/5 border-2 border-gray-400 bg-white py-[2px] px-4 mr-1 rounded-md ' 
                    value={newTodoName} 
                    onChange={(e)=>setNewTodoName(e.target.value)}
                    data-testid='input-bar'
                />
                <button data-testid='add-todo-btn' className='m-2 py-[3px] px-4 bg-slate-500 text-slate-300 rounded-md shadow-md hover:scale-110  ' 
                    onClick={()=>{
                        let todoObj = {
                            index: todoList.length,
                            todoName: newTodoName,
                            hide: false
                        }
                        setTodoList([ ...todoList , todoObj ])
                        setNewTodoName('')
                    }}
                >Add</button>
            </div>
        </div>
        <div className=" w-1/3 relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mt-2 ">
            <div className="mx-auto max-w-md text-lg ">
                <ul className='mb-2' >{displayList}</ul>
                <div>
                    <span data-testid='todo-count'  className='italic text-gray-800 font-bold ' >{ todoCount === 0 ? `Woohoo! You don't have any pending tasks` : todoCount === 1 ? '1 task left' : `${todoCount} tasks left`}</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Body