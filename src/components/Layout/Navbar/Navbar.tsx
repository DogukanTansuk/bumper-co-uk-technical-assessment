// React Imports
import React, {FC, useCallback, useState} from 'react'

// Style Imports
import './styles/Navbar.css'

// Component Imports
import {NavbarLinks} from './NavbarLinks'
import {NavbarItem} from './NavbarItem'
import {Svg} from '../../Svg'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleMenuAction = useCallback(() => setToggleMenu(!toggleMenu), [toggleMenu])

  return (
    <nav className='lg:mt-3 lg:px-1 fixed flex flex-row justify-center w-full lg:top-1 z-40 universallg:mt-1 universal'>
      <div className='bg-primary lg:border border-black w-full xl:max-w-7xl lg:max-w-7xl lg:rounded-full pt-3 sm:pt-0'>
        <div className='hidden w-full lg:flex flex-row items-center relative px-10'>
          <NavbarLinks />

          <div className='w-full left-0 z-10 flex flex-row items-center justify-center absolute'>
            <Link className='pt-0.5 cursor-pointer' to='/partner'>
              <Svg path='/svg/Logomark.svg' />
            </Link>
          </div>

          <div className='absolute right-10 z-20 flex flex-row items-center justify-end pr-1'>
            <NavbarItem href='partner' text='Partner sign up' icon='wrench' />

            <NavbarItem
              href='registration/dealership'
              text='Partner Login'
              textClass='group-hover:text-nav-contrast text-nav-content hover:text-white'
              textContainerClass='border border-black px-5 rounded-3xl'
              icon='warehouse'
            />
          </div>
        </div>

        <div className='flex lg:hidden'>
          <div className='border-b border-black z-10 w-full px-5 pb-1'>
            <div className='w-full px-1.5 flex flex-row justify-between items-center'>
              <Link
                className='cursor-pointer pt-0.75 pb-0.25'
                onClick={toggleMenuAction}
                to='/partner'>
                <div
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    boxSizing: 'border-box',
                    margin: 0,
                  }}>
                  <div
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      maxWidth: '100%',
                    }}>
                    <Svg path='/svg/Logomark.svg' />
                  </div>
                  <noscript></noscript>
                </div>
              </Link>
              <div className='flex flex-row space-x-0.5'>
                <button
                  onClick={toggleMenuAction}
                  type='button'
                  className='btn btn-ghost border border-black rounded-full h-8 w-8 flex items-center justify-center '>
                  {toggleMenu && <FontAwesomeIcon icon='close' />}
                  {!toggleMenu && <FontAwesomeIcon icon='bars' />}
                </button>
              </div>
            </div>
          </div>

          {toggleMenu && (
            <div className='absolute left-0 w-full h-screen bg-primary z-0 pt-10 text-left'>
              <NavbarLinks isMobile />

              <div className='flex flex-col border-t mt-0.5 pt-1 px-1.5 space-y-2'>
                <Link
                  className='mt-5 cursor-pointer relative flex flex-col py-1'
                  onClick={toggleMenuAction}
                  to='/partner'>
                  <span className='group'>
                    <p className='text-n0 px-5 whitespace-pre-line font-text font-content leading-content text-primary-content whitespace-nowrap items-center space-x-0.5'>
                      <span className='text-nav-content'>Partner sign up</span>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='wrench'
                        className='svg-inline--fa fa-wrench fa-1x text-primary-content '
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path
                          fill='currentColor'
                          d='M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z'></path>
                      </svg>
                    </p>
                    <span className='bg-transparent group-hover:bg-reverse absolute -left-6 bottom-0 h-full w-2 rounded-r-2xl'></span>
                  </span>
                </Link>
                <Link
                  className='ml-2 mt-14 border-black cursor-pointer relative w-fit border rounded-full py-0.5 px-0.75'
                  onClick={toggleMenuAction}
                  to='/partner'>
                  <span className='group'>
                    <p className='text-n0 px-5 font-text font-content leading-content text-primary-content whitespace-nowrap items-center space-x-0.5'>
                      <span className='text-nav-content'>Partner login</span>

                      <FontAwesomeIcon className='tex' icon='warehouse' />
                    </p>
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
