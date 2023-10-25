import React from 'react'

function Input() {
  return (
    <div className='relative'>
        <input id='email'
        className='
            block
            rounded-md
            pt-6
            pb-1
            w-full
            text-md
            text-white
            bg-zinc-700
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
        ' 
        placeholder=' ' />
        <label htmlFor="email" className='
            absolue
            text-md
        '>

        </label>
    </div>
  )
}

export default Input