import clsx from 'clsx'
import React, {FC, memo} from 'react'
import {NavbarItemModel} from './models'
import {NavbarItem} from './NavbarItem'

interface NavbarLinksProp {
  isMobile?: boolean
}

export const NavbarLinks: FC<NavbarLinksProp> = memo(({isMobile}) => {
  const NavbarLinksItems: NavbarItemModel[] = [
    {
      href: 'find-a-partner',
      text: 'Apply',
    },
    {
      href: 'howitworks',
      text: 'How it works',
    },
    {
      href: 'about',
      text: 'About us',
    },
    {
      href: 'blog',
      text: 'Blog',
    },
  ]

  return (
    <div
      className={clsx('flex w-5/12 z-20', {
        'flex-col space-y-2 px-6 mt-5 mb-5': isMobile,
        'flex-row': !isMobile
      })}>
      {NavbarLinksItems.map(({href, text}, index) => (
        <NavbarItem
          key={`menu_${href}_${index}`}
          href={href}
          text={text}
          isMobile={isMobile ? true : false}
        />
      ))}
    </div>
  )
})
