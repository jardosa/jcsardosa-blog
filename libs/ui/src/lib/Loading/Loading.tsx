import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";


const Loading = () => {
  return (
    <div className='grid place-items-center h-full w-full'>
      <AiOutlineLoading className='w-10 h-10 animate-spin text-neutral-500' />
    </div>
  )
}

export default Loading