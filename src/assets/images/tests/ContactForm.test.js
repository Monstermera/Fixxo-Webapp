import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactForm from '../../../sections/contact/ContactForm'

describe(ContactForm, () => {

    test("name input should be rendered", () => {
        render (<ContactForm />);
        const userInputEl = screen.getByPlaceholderText('Your Name');
        expect(userInputEl).toBeInTheDocument()
    })

    test("mail input should be rendered", () => {
        render (<ContactForm />);
        const userInputEl = screen.getByPlaceholderText('Your Mail');
        expect(userInputEl).toBeInTheDocument()
    })

    test("comment input should be rendered", () => {
        render (<ContactForm />);
        const userInputEl = screen.getByPlaceholderText('Comments');
        expect(userInputEl).toBeInTheDocument()
    })

    test("button should be rendered", () => {
        render (<ContactForm />);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl).toBeInTheDocument()
    })
})