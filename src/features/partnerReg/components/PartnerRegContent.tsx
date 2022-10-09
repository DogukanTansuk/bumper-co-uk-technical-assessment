// Reat Imports
import React, {FC} from 'react'

// Component Imports
import {Svg} from '../../../components/Svg'

// Style Imports
import '../style/PartnerRegContent.css'
import '../../../index.css'

//Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, useNavigate} from 'react-router-dom'

export const PartnerRegContentComponent: FC = () => {
  const navigate = useNavigate()

  return (
    <main className='container-fluid'>
      <div className='bg-center bg-cover bg-sidecar-mobile md:bg-sidecar relative'>
        <div className='bg-secondary-contrast-70 absolute w-full h-full top-0 z-0'></div>

        <div className='px-5 md:px-2 relative z-10'>
          <div className='px-1 md:px-0 container mx-auto xl:max-w-7xl lg:max-w-5xl lg:pt-8 pt-7 pb-1.5 md:pb-3'>
            <div className='bg-transparent'>
              <div className='flex flex-col px-1 pt-16 pb-5 md:pb-10 lg:px-0.5 justify-center text-left container xl:max-w-7xl lg:max-w-5xl'>
                <div className='flex gap-0.5 items-center mt-5 md:mt-10'>
                  <p className='text-n2 whitespace-pre-line  font-bold leading-content mr-2 text-stone-300'>
                    Excellent
                  </p>
                  <Svg className='mr-2' path='/svg/5-stars.svg' />
                  <Svg className='mr-2' path='/svg/Trustpilot.svg' />
                </div>

                <h1 className='text-left text-n4 md:text-n8 lg:text-n9 whitespace-pre-line text-secondary-content max-w-4xl mt-1.5 md:mt-2 uppercase text-white'>
                  BECOME A BUMPER APPROVED DEPENDABLE partner
                </h1>
                <p className='text-left text-white text-n1 whitespace-pre-line  font-content leading-content text-secondary-content mt-0.5 md:mt-1.5 max-w-md'>
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
                    <p className='text-n2 px-4 py-1 whitespace-pre-line leading-content text-primary-content text-accent-content group-hover:text-reverse flex justify-center items-center '>
                      Register your interest
                      <FontAwesomeIcon className='m-2 text-black' icon='arrow-right-long' />
                    </p>
                  </button>
                </div>

                <p className='text-n0 mt-4 whitespace-pre-line  font-content leading-content text-secondary-content '>
                  Already registered?{' '}
                  <Link
                    to='/partner/home'
                    className='hover:underline text-secondary-accent cursor-pointer'>
                    <span>login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='content  px-4 md:px-0 mx-auto xl:max-w-7xl lg:max-w-5xl lg:pt-8 pt-7 pb-1.5 md:pb-3'>
        <div className='flex'>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <span className='text-n2'>PayLater</span>
              <h3 className='text-n2 text-tone-contrast md:text-n2 mt-1.5  font-bold leading-content text-secondary-content mb-0.5. whitespace-pre-line'>
                Allow your customers to split their repair or service bill over monthly repayments.
              </h3>

              <h1 className='text-n2 mt-4 font-extrabold md:text-n7 lg:text-n7 whitespace-pre-line md:font-bold text-reverse-content uppercase md:mt-1.5'>
                NO RISK FOR YOU, NO WORRY FOR DRIVERS
              </h1>

              <div className='mt-1.5 md:mt-3.5 space-y-2'>
                <p className='text-n0 whitespace-pre-line  font-bold leading-content text-primary-content mb-5'>
                  It’s as simple as:
                </p>

                <div className='flex flex-col'>
                  <div className='flex gap-x-0.5'>
                    <div className='flex flex-col items-center'>
                      <p className='text-n-1 whitespace-pre-line  font-bold leading-content text-primary-content flex items-center justify-center w-6 min-w-1.5 h-6 min-h-1.5 border border-tone-contrast rounded-full bg-primary'>
                        1
                      </p>
                      <div className='w-px h-full bg-tone-contrast'></div>
                    </div>
                    <div className='pb-1'>
                      <div className='space-y-0.5'>
                        <p className='text-n0 whitespace-pre-line  font-bold leading-content text-primary-content '>
                          Fix it
                        </p>
                        <p className='text-n0 whitespace-pre-line  font-content leading-content text-primary-content '>
                          Your customers bring their vehicle to you. You repair and service the car.
                          Everything just like it works right now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-x-0.5'>
                    <div className='flex flex-col items-center'>
                      <p className='text-n-1 whitespace-pre-line  font-bold leading-content text-primary-content flex items-center justify-center w-6 min-w-1.5 h-6 min-h-1.5 border border-tone-contrast rounded-full bg-primary'>
                        2
                      </p>
                      <div className='w-px h-full bg-tone-contrast'></div>
                    </div>
                    <div className='pb-1'>
                      <div className='space-y-0.5'>
                        <p className='text-n0 whitespace-pre-line  font-bold leading-content text-primary-content '>
                          Split it
                        </p>
                        <p className='text-n0 whitespace-pre-line  font-content leading-content text-primary-content '>
                          When the customer gets their bill or quote, Bumper either intergrates into
                          your existing online checkout or can be done on-site before you hand back
                          the keys. All in just a few clicks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-x-0.5'>
                    <div className='flex flex-col items-center'>
                      <p className='text-n-1 whitespace-pre-line  font-bold leading-content text-primary-content flex items-center justify-center w-6 min-w-1.5 h-6 min-h-1.5 border border-tone-contrast rounded-full bg-primary'>
                        3
                      </p>
                    </div>
                    <div className=''>
                      <div className='space-y-0.5'>
                        <p className='text-n0 whitespace-pre-line  font-bold leading-content text-primary-content '>
                          Sorted
                        </p>
                        <p className='text-n0 whitespace-pre-line  font-content leading-content text-primary-content '>
                          You and your customer part ways happy. You’re paid in full direct from
                          Bumper, the customer repays Bumper over their chosen payment plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/registration/dealership')}
                  data-tip='true'
                  data-for='Register your interest'
                  className='text-black border border-black group rounded-full bg-accent disabled:pointer-events-none disabled:cursor-not-allowed pointer-events-auto cursor-pointer py-0.5 px-1.5'
                  type='button'>
                  <p className='text-n1 md:text-n2 px-4 md:px-4 py-1 whitespace-pre-line leading-content text-primary-content text-accent-content group-hover:text-reverse flex justify-center items-center '>
                    Register your interest
                    <FontAwesomeIcon className='m-2 text-black' icon='arrow-right-long' />
                  </p>
                </button>
              </div>
            </div>

            <img className='h-1/5 md:h-5/6' src='/img/home-phone.png' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PartnerRegContentComponent
