// React Imports
import React from 'react'

//Package Imports
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

//Util And Lib Imports
import {store} from './libs/store'

//Component Imports and Style Imports
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
