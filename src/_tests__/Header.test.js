import Header from "../Header";
import { render, screen } from "@testing-library/react";
test('Check if header title loads on inital render with the value passed in prop',()=>{
    let title = 'Header Title Dummy String'
    render(<Header title= {title} />)
    const headerTitle = screen.getByTestId('header-title')
    expect(headerTitle.innerHTML).toBe(title)
})

test('Check if header description loads on inital render with the value passed in prop',()=>{
    let desc = 'Header description Dummy String'
    render(<Header description= {desc} />)
    const headerTitle = screen.getByTestId('header-desc')
    expect(headerTitle.innerHTML).toBe(desc)
})