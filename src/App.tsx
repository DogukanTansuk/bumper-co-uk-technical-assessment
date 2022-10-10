// React Imports
import {Suspense} from 'react'

// Feature Imports
import {Navbar} from './components/Layout/Navbar/Navbar'

// Style Imports
import './App.css'

// Packge Imports
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {Outlet} from 'react-router-dom'

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
