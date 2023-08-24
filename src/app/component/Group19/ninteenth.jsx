import React from 'react'
import Image from 'next/image'  
const Ninteenth = () => {
  return (
 <React.Fragment>

< div className=" flex flex-col text-white justify-center items-center h-[500px]">
        <Image src='/images/thank.png' alt='' width={200} height={200}/>
       
       
       </div>

       <div className='flex justify-center'>
<Image src='/images/15.png' alt='' width={200} height={200}/>
</div>
<div className='flex gap-x-10 justify-center mt-5 '>

    <p>© ZIMO GROUP 2023</p>
    <p>TERMS OF SERVICE</p>
    <p>PRIVACY POLICY</p>
</div>
 </React.Fragment>
        
  )
}

export default Ninteenth