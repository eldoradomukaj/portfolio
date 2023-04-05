import React from 'react'

export const Button = ({icon, text}) => {
  return (
    <button className="flex items-center font-inter leading-none mt-8 px-8 py-4 text-lg font-semibold rounded bg-[#0FFF95] hover:opacity-80 transition-all text-[#30343F]">
        <div className='flex items-center'>
            <span className='mr-4'>{icon}</span>
            <span>{text}</span>
        </div>
    </button>
  )
}
