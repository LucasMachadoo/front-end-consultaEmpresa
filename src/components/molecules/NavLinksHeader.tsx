import Link from 'next/link';
import React from 'react'

type NavLinksProps = {
  color?: string;
  className?: string;
}

const listLinks = [
  {label: "Home", url: "#"},
  {label: "Sobre", url: "/sobre"},
  {label: "Contato", url: "/contato"},
  {label: "Empresa ", url: "/empresa"},
]

export default function NavLinksHeader({color, className}: NavLinksProps) {
  return (
    <nav>
      <ul className={`${className} flex flex-col lg:flex-row gap-4`}>
        {listLinks.map(index => (
          <li key={index.label}>
            <Link href={index.url} legacyBehavior>
              <a className={`${color} hover:text-orange-300 text-base link link-hover hover:underline`}>
                {index.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}