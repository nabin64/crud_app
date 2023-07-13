import React from 'react'
import { BiCheck } from 'react-icons/bi'

const bug = ({ message }) => {
    return (
        <div className='success container mx-auto'>
            <div className='flex justify-center mx-auto border-red-200 bg-red-200 w-3/6 text-gray-900 my-4 py-2 text-center bg-opacity-20'>
                {message} <BiCheck size={25} color={"rdb(34,19,197,94)"} />
            </div>
        </div>
    )
}

export default bug
