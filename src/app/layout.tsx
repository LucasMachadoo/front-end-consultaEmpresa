'use client'
import Header from '@/components/molecules/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/molecules/Footer'
import InputSearch from '@/components/atoms/InputSearch'
import DarkModeToggle from '@/components/DarkModeToggle'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Consulta Empresas',
  description: 'Consulta de cadastro de Empresas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <html lang="pt-br" className=''>
      <body className={`${inter.className}  bg-gradient-to-r from-zinc-500 to-zinc-400 flex flex-col justify-center`}>
        <div className='space-y-6'>
          
        <main className=" px-6 md:px-24 lg:px-32">
          <Header />
            {pathname === '/' ? <InputSearch /> : null}
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
