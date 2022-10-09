// React Imports
import React, {Suspense} from 'react'
import logo from './logo.svg'

// Feature Imports
import {Counter} from './features/counter/Counter'
import './App.css'
import {Navbar} from './components/Layout/Navbar/Navbar'
import {AppRoutes} from './routes'

// Packge Imports
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'

library.add(fas)

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<>Cindoruk</>}>
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
