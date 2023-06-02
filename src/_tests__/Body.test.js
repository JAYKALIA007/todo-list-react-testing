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
        const todoListArray = screen.queryAllByTestId('todo-list-array')
        expect(todoListArray.length).toBe(0)
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
        const todoListArray = screen.getAllByTestId('todo-list-array')
        expect(todoListArray.length).toBe(1)
    })

    test('add 3 todos and check if all 3 are reflected in todo list',()=>{
        const todosArray = ['Take a walk', 'Go to gym', 'Attend university classes']
        render(<Body />)

        for(let todo of todosArray){ 
            const inputBar = screen.getByTestId('input-bar')
            const addTodoBtn = screen.getByTestId('add-todo-btn')
            fireEvent.change(inputBar , {target:{value: todo}})
            fireEvent.click(addTodoBtn)
        }

        const todoListArray = screen.getAllByTestId('todo-list-array')
        expect(todoListArray.length).toBe(todosArray.length)
        

    })
})

describe('tests to check whether the input field is working properly',()=>{
    test('input field should render the placeholder text on initial render',()=>{
        render(<Body />)
        const inputBar = screen.getByPlaceholderText('eg - take a walk');
        expect(inputBar).toBeInTheDocument()
    })

    test('input field should render the entered text while typing', () =>{
        const todo = 'Take a bath'
        render(<Body />)
        const inputBar = screen.getByPlaceholderText('eg - take a walk')
        fireEvent.change(inputBar, {target : { value :  todo}} )
        expect(inputBar.value).toBe(todo)
    })

    test('input field should render the placeholder text after the Add butoon is pressed', ()=>{
        render(<Body />)
        const inputBar = screen.getByPlaceholderText('eg - take a walk')
        const addTodoBtn = screen.getByTestId('add-todo-btn')
        fireEvent.change(inputBar , {target:{value:'Take a bath'}})
        fireEvent.click(addTodoBtn)
        expect(inputBar.value).toBe('')
    })
})

describe('check styles of todo list items',()=>{

    test('default style of todo to be not checked',()=>{
        render(<Body />)

        const inputBar = screen.getByTestId('input-bar')
        const addTodoBtn = screen.getByTestId('add-todo-btn')
        fireEvent.change(inputBar, {target:{value:'go for a walk'}})
        fireEvent.click(addTodoBtn)

        const todoListItem = screen.getByText('go for a walk')
        expect(todoListItem).toHaveClass('text-gray-800')
    })

    test('style of todo changes to be checked when we click on todo',()=>{
        render(<Body />)

        const inputBar = screen.getByTestId('input-bar')
        const addTodoBtn = screen.getByTestId('add-todo-btn')
        fireEvent.change(inputBar, {target:{value:'go for a walk'}})
        fireEvent.click(addTodoBtn)

        const todoListItem = screen.getByText('go for a walk')
        fireEvent.click(todoListItem)
        expect(todoListItem).toHaveClass('text-gray-300 cursor-pointer ')
    })
})
