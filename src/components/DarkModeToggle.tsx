'use client'
import { useState } from 'react'

type DarkModeToggleProps = {
  // Props adicionais, se necessário
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // Adicione aqui a lógica para alternar o tema escuro/claro no seu projeto
  }

  return (
    <button
      className="fixed top-0 right-0 mr-2 mt-2 border hover:bg-slate-500 hover:fill-yellow-500 flex justify-center items-center rounded-lg h-12 w-12"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <span className="w-5 h-5 text-gray-500 dark:text-yellow-500">1</span>
      ) : (
        <span className="w-5 h-5 text-gray-500 dark:text-yellow-500">2</span>
      )}
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#0000000" d="M14 20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h1m1-3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2c-1.8-1.18-3-3.2-3-5.5A6.5 6.5 0 0 1 11.5 3A6.5 6.5 0 0 1 18 9.5c0 2.3-1.2 4.32-3 5.5v2m-6 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.6c1.78-.9 3-2.76 3-4.9A5.5 5.5 0 0 0 11.5 4A5.5 5.5 0 0 0 6 9.5c0 2.14 1.22 4 3 4.9V17Z"></path></svg>

      {/* <button className='fixed top-0 right-0 mr-2 mt-2 border hover:bg-slate-500 hover:fill-yellow-500 flex justify-center items-center rounded-lg h-12 w-12'>
          
        </button> */}
    </button>
  )
}

export default DarkModeToggle
