import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'styled-components'

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./styled/theme.scss')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
registerServiceWorker()
