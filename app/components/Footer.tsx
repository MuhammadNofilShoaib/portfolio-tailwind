import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-lightYellow text-customBlue flex flex-col justify-center items-center gap-[10px] uppercase w-full font-sans'>
        <div className='text-center text-3xl font-bold'><p>connect❤️</p></div> 
      <div className='flex justify-center items-cenflex items-center gap-5'>
        <a href="https://www.linkedin.com/in/nofil-shoaib-6b284328a" target='_blank'><Image className='flex items-center justify-center gap-5 ease-in-out duration-200 hover:scale-[110%]' src='/li.png' alt='linkedin' width={50} height={200}></Image></a>
     <a href="https://www.youtube.com/@Itsgamingwarden" target='_blank'><Image className='flex items-center justify-center gap-5 ease-in-out duration-200 hover:scale-[110%]' src='/yt.png' alt='youtube' width={50} height={200}></Image></a>
     <a href="https://github.com/MuhammadNofilShoaib" target='_blank'><Image className='flex items-center justify-center gap-5 ease-in-out duration-200 hover:scale-[110%]' src='/gh.png' alt='github' width={50} height={200}></Image></a>
     <a href="https://www.instagram.com/muhammad_nofil_shoaib/" target='_blank'><Image className='flex items-center justify-center gap-5 ease-in-out duration-200 hover:scale-[110%]' src='/ig.png' alt='instagram' width={50} height={200}></Image></a>
      </div>
      <div className="mail">
        <a className='lowercase no-underline text-xl' href="mailto:nofilshoaib@gmail.com">nofilshoaib@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer
