import React from 'react'
import Image from "next/image";
const GroupSix = () => {
  return (
    <div className='overflow-hidden '>
        <div className="relative">
        <Image src="/images/car.png" alt="picture" width={1500} height={400} />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">CAR</div>
        <Image src="/images/carChild.png" alt="picture" width={400} height={400} 
        className='absolute right-0 bottom-0 rounded mr-5' />
        </div>

    </div>
  )
}

export default GroupSix