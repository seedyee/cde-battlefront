/* eslint-disable */
import React from 'react'

// Having this contained within an if statement like this allows webpack
// dead code elimination to take place. It's the small things. :)
let ReactHotLoader
if (process.env.NODE_ENV === 'development') {
  ReactHotLoader = require('react-hot-loader').AppContainer
} else {
  ReactHotLoader = function({ children }) {
    return React.Children.only(children)
  }
}

export default ReactHotLoader

