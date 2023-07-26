'use client';
import React from 'react'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation';
import MenuButton from '../atoms/ButtonMenu';
import Link from 'next/link'; 
import NavLinksHeader from './NavLinksHeader'
type Props = {
}

const HeaderHome = () => (
  <>
    <div className='flex justify-center'>
      <img src="https://cdn.discordapp.com/attachments/1087537022706663536/1130039532813832202/logo.png"  alt="" width="65%"/>
    </div>
    <div className="">
      <h4 className='text-center text-white'>Aqui você encontra todas as empresas brasileiras, informações completas.</h4>
    </div>
  </>
);

const HeaderMain = () => (
  <>
    <Link href={'/'}>
      <div>
        <img src="https://cdn.discordapp.com/attachments/1087537022706663536/1130039532813832202/logo.png"  alt="" width="60%"/>
      </div>
    </Link>
    <NavLinksHeader color='text-white hidden lg:flex' />
    
    <MenuButton />
  </>
);

export default function Header({}: Props) {

  const pathname = usePathname();

  return (
    <header className={pathname === '/' ? 'flex flex-col justify-center py-3' : 'w-full  flex justify-between items-center py-3 px-6 md:px-24 lg:px-36'}>
      {pathname === '/' ? <HeaderHome /> : <HeaderMain />}
    </header>
    
  )
}