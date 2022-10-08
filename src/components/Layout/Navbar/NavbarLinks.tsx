import React, {FC, memo} from 'react'
import {NavbarItemModel} from './models'
import {NavbarItem} from './NavbarItem'

export const NavbarLinks: FC = memo(() => {
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
    <div className='flex flex-row w-auto w-5/12 z-20'>
      {NavbarLinksItems.map(({href, text}, index) => (
        <NavbarItem key={`menu_${href}_${index}`} href={href} text={text} />
      ))}
    </div>
  )
})
