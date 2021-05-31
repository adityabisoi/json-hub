import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../Home'

import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders correctly without crashing',()=>{
    const div=document.createElement('div')
    ReactDOM.render(<Home></Home>,div)
})

it('checks content of homepage',()=>{
    const {getByTestId} = render(<Home></Home>)
    expect(getByTestId('home-div')).toHaveTextContent('REST-FETCH')
})