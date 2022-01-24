import React from 'react'
import ReactDOM from 'react-dom'
import Contact from '../Contact'

import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders correctly without crashing',()=>{
    const div=document.createElement('div')
    ReactDOM.render(<Contact></Contact>,div)
})

it('checks content',()=>{
    const {getByTestId} = render(<Contact></Contact>)
    expect(getByTestId('contact-div')).toHaveTextContent('GOT QUESTIONS?')
})