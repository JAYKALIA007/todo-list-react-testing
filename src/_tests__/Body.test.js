import { fireEvent, render ,screen } from "@testing-library/react"
import Body from "../Body"

describe('tests to check number of tasks left',()=>{

    test('check if initial todo count is zero',()=>{

        render(<Body/>)
        const todoCount = screen.getByTestId('todo-count')
        // console.log(todoCount.innerHTML)
        expect(todoCount.innerHTML).toBe(`Woohoo! You don't have any pending tasks`)
    })
    
    test('check if add todo event is actually reflecting in todo footer',()=>{
    
        render(<Body/>)
    
        //fire an event to change the input box value
        const inputBar = screen.getByTestId('input-bar')
        fireEvent.change(inputBar, {target:{value:'Take a bath'}} )
    
        //fire an event to click on Add button
        const addTodoBtn = screen.getByTestId('add-todo-btn')
        fireEvent.click(addTodoBtn)
    
        //check if todo count increases when a todo is added
        const todoCount = screen.getByTestId('todo-count')
        expect(todoCount.innerHTML).toBe(`1 task left`)
    })
})

describe('tests to check todo list array',()=>{
    test('check if initial todolist array is empty',()=>{

        render(<Body/>)
    
        const todoListArray = screen.getByTestId('todo-list-array')
        // console.log(todoListArray.innerHTML.length)
        expect(todoListArray.innerHTML.length).toBe(0)
    })
    
    test('check if add todo event is actually reflecting in todo list',()=>{
        render(<Body/>)
    
        //fire an event to change the input box value
        const inputBar = screen.getByTestId('input-bar')
        fireEvent.change(inputBar, {target:{value:'Take a bath'}} )
    
        //fire an event to click on Add button
        const addTodoBtn = screen.getByTestId('add-todo-btn')
        fireEvent.click(addTodoBtn)
    
        // check if the added todo actually reflects on the list
        const todoListArray = screen.getByTestId('todo-list-array')
        // expect(todoListArray.innerHTML.split('</li> ').length).toBe(1)
        expect(todoListArray).toContainHTML('li')
    })
})