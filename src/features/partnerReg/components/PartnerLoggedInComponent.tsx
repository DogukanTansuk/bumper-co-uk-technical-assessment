// React Imports
import React, {useState} from 'react'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Component Imports
import {DealerShipListComponent} from './DealerShipListComponent'

export const PartnerLoggedInComponent = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className='container-fluid bg-secondary'>
      <div className='content'>
        <div className='mb-5 flex flex-col space-y-1'>
          <h3 className='mt-14 md:mt-1 text-n3 md:text-n4 lg:text-n6 font-bold text-secondary-content mb-0.5. whitespace-pre-line'>
            Interested Dealerships
          </h3>
        </div>

        <div className='card'>
          <div className='mb-1 mt-0.5'>
            <label className='text-n0 font-bold' htmlFor='name'>
              <FontAwesomeIcon icon='building' className='mr-1 text-primary' /> Search Company
            </label>

            <input
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              className='input'
              type='text'
              id='name'
            />
          </div>
        </div>

        <DealerShipListComponent searchQuery={searchQuery} />
      </div>
    </main>
  )
}

export default PartnerLoggedInComponent
