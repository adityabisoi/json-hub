import React from 'react'
import ReactDOM from 'react-dom'
import Route from '../Route'

import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders correctly without crashing',()=>{
    const div=document.createElement('div')
    ReactDOM.render(<Route></Route>,div)
})

it('checks content of route',()=>{
    const {getByTestId} = render(<Route></Route>)
    expect(getByTestId('route-div')).toHaveTextContent('Here are the API routes fetched in this project')
})