import { SVGProps } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import NavLinks from '../molecules/NavLinks'
import Link from 'next/link'

type Props = {
  label?: string;
  url?: string;
}

const listLinks = [
  {label: "Home", url: "/"},
  {label: "Sobre", url: "/sobre"},
  {label: "Políticas de Privacidade", url: "/politicas-de-privacidade"},
  {label: "Contato", url: "/contato"},
  {label: "Empresa (teste)", url: "/empresa"},
]

export default function MenuButton({label, url}: Props) {
  return (
    <div className="lg:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-50 px-4 py-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#888888" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-4 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border text-right">
            <div className="px-1 py-1">
              <ul>
                {listLinks.map((index) => (
                  <li key={index.label} className='w-full font-light py-1 uppercase h-auto rounded hover:bg-blue-500 hover:text-white transition-all'>
                    <Link className='' href={index.url} legacyBehavior>
                      <a>
                        {index.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
