import React from 'react'
import { BiCheck } from 'react-icons/bi'

const success = ({ message }) => {
  return (
    <div className='success container mx-auto'>
      <div className='flex justify-center mx-auto border-yellow-400 bg-yellow-300 w-3/6 text-gray-900 my-4 py-2 text-center bg-opacity-20'>
        {message} <BiCheck size={25} color={"rdb(34,19,197,94)"} />
      </div>
    </div>
  )
}

export default success
