//React Imports
import React, {FC, PropsWithChildren} from 'react'
import {Link, useLocation} from 'react-router-dom'

//Util And Lib Imports
import {checkIsActive} from '../../../utils'

//Package Imports
import clsx from 'clsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'

import '../../../index.css'

interface NavbarItemProps extends PropsWithChildren {
  href: string
  text?: string
  textClass?: string
  textContainerClass?: string
  icon?: IconProp
}

export const NavbarItem: FC<NavbarItemProps> = ({
  href,
  text,
  textClass,
  textContainerClass,
  icon,
  children,
}) => {
  const {pathname} = useLocation()
  const isActive = checkIsActive(pathname, href)

  return (
    <Link className='relative ml-5 z-10 ' to={`/${href}`}>
      <span className='py-4 flex flex-col group cursor-pointer'>
        <span
          className={`inline-flex px-0.5 items-center space-x-0.5 whitespace-nowrap ${textContainerClass}`}>
          <span className={`text-n0 mr-2 ${textClass ?? ''}`}>{text}</span>

          {icon && <FontAwesomeIcon icon={icon} />}
        </span>

        <span
          className={clsx(
            'absolute bottom-0 h-1 w-full rounded-t-2xl last',
            {
              'bg-nav-content': isActive,
            },
            {
              'bg-transparent group-hover:bg-white': !isActive,
            }
          )}></span>
      </span>
    </Link>
  )
}
