import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Header = ({category,text}) => {
  return (
    <div className='flex gap-1 items-center mb-5'>
      <p className='text-gray-400'>{category}</p>
      <BsArrowRight className='text-gray-200'/>
      <p className='text-2xl font-extrabold'>{text}</p>
    </div>
  )
}

export default Header