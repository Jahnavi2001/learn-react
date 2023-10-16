import { render, screen } from '@testing-library/react'
import Contact from "../components/Contact"
import '@testing-library/jest-dom'

describe('Contact Us Page Test Case', () => {

  it('Should load contact us component', () => {

    // Rendering
    render(<Contact />)
    
    // Querying
    const heading = screen.getByRole('heading')
  
    // Assertion
    expect(heading).toBeInTheDocument()
    
  })
  
  it('Should load button inside Contact component', () => {
    render(<Contact />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  
    const buttonText = screen.getByText('Submit')
    expect(buttonText).toBeInTheDocument()
  })
  
  it('Should load input name inside Contact component', () => {
    render(<Contact />)
    const placeholder = screen.getByPlaceholderText('name')
    expect(placeholder).toBeInTheDocument()
  })
  
  it('Should load 2 input boxes on the Contact component', () => {
    render(<Contact />)
    const inputBoxes = screen.getAllByRole('textbox')
    expect(inputBoxes.length).toBe(2)
  })

})