import React from 'react'

type Props = {}

export default function InputSearch({}: Props) {
  return (
    <form className="form-control">
      <div className="input-group flex justify-center items-center">
        <input type="text" className="border border-gray-200 w-full h-[48px] px-2 rounded-l-md" placeholder="Search ..." />
        <button className="bg-orange-400 flex justify-center items-center h-[48px] w-[48px] rounded-r-md text-white hover:bg-orange-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </form>
  )
}
