// Reat Imports
import React from 'react'

// Component Imports
import {Svg} from '../../../components/Svg'

// Style Imports
import '../style/PartnerRegContent.css'
import '../../../index.css'

//Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'

export const PartnerRegContent = () => {
  const navigate = useNavigate()

  return (
    <main className='container-fluid bg-center bg-cover bg-sidecar-mobile md:bg-sidecar relative'>
      <div className='bg-secondary-contrast-70 absolute w-full h-full top-0 z-0'></div>

      <div className='md:px-2 relative z-10'>
        <div className='px-1 md:px-0 container mx-auto xl:max-w-7xl lg:max-w-5xl lg:pt-8 pt-7 pb-1.5 md:pb-3'>
          <div className='bg-transparent'>
            <div
              className='flex flex-col px-1 lg:px-0.5 justify-center text-left container xl:max-w-7xl lg:max-w-5xl'
              style={{
                height: 600,
              }}>
              <div className='flex gap-0.5 items-center'>
                <p className='text-n2 whitespace-pre-line font-text font-bold leading-content mr-2 text-stone-300'>
                  Excellent
                </p>
                <Svg className='mr-2' path='/svg/5-stars.svg' />
                <Svg className='mr-2' path='/svg/Trustpilot.svg' />
              </div>

              <h1 className='text-left text-n4 md:text-n8 lg:text-n9 whitespace-pre-line text-secondary-content max-w-4xl mt-1.5 md:mt-2 uppercase text-white'>
                BECOME A BUMPER APPROVED DEPENDABLE partner
              </h1>
              <p className='text-left text-white text-n1 whitespace-pre-line font-text font-content leading-content text-secondary-content mt-0.5 md:mt-1.5 max-w-md'>
                Join our network of 3000 garages and dealerships who already offer Bumper to their
                customers.
              </p>

              <div className='mt-1.5 mb-0.75'>
                <button
                  onClick={() => navigate('/registration/dealership')}
                  data-tip='true'
                  data-for='Register your interest'
                  className='text-black border border-black group rounded-full bg-accent disabled:pointer-events-none disabled:cursor-not-allowed pointer-events-auto cursor-pointer py-0.5 px-1.5'
                  type='button'>
                  <p className='text-n2 whitespace-pre-line font-text font-content leading-content text-primary-content text-accent-content  group-hover:text-reverse  flex justify-center items-center flex-row '>
                    Register your interest{' '}
                    <FontAwesomeIcon className='m-2 text-black' icon='arrow-right-long' />
                  </p>
                </button>
              </div>

              <p className='text-n0 mt-4 whitespace-pre-line font-text font-content leading-content text-secondary-content '>
                Already registered?{' '}
                <span className='hover:underline text-secondary-accent cursor-pointer'>
                  <span>login</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PartnerRegContent
