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

library.add(fas)

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <div className='App'>
        <Navbar />
        <AppRoutes />
      </div>
    </Suspense>
  )
}

export default App
