import React from 'react'
import ReactDOM from 'react-dom'
import { Balance } from '../Balance'

import {render} from '@testing-library/react'
import 'jest-dom/extend-expect'

it ("Renders Balance heading without crashing", () => {
    const h4 = document.createElement("h4");
    ReactDOM.render(<h4></h4>, h4)
})

it ("Renders dollar sign heading without crashing", () => {
    const h1 = document.createElement("h1");
    ReactDOM.render(<h1></h1>, h1)
})

// it("Renders heading correctly", () => {
//     expect.h4().toHaveTextContent("Your Balance");
// })