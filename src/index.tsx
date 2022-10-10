// React Imports
import React from 'react'

// Package Imports
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'

// Util And Lib Imports
import {store} from './libs/store'
import {persistor} from './libs/persistor'

// Style Imports
import './index.css'
import { AppRoutes } from './routes'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate persistor={persistor} loading={<div>Please Wait....</div>}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
)
