import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <div className='bg-lightYellow/50 m-0 p-0 font-sans grid grid-cols-1 relative overflow-x-hidden customMd:grid customMd:grid-cols-2 lg:grid lg:grid-cols-3 customMd:fixed customMd:top-0 customMd:w-full backdrop-blur-[3px]'>

            <div className='text-4xl text-customBlue uppercase font-bold flex justify-center m-2'>
                <h1>nofil.</h1>
            </div>
            <div className='flex justify-center items-center gap-[14px] text-customBlue mx-2 customMd:gap-10'>
                <Link className='p-[5px] rounded-2xl no-underline text-lg font-medium capitalize hover:scale-[110%] hover:bg-darkYellow hover:shadow-md ease-in-out duration-200 customMd:text-xl' href='/'>home</Link>
                <Link className='p-[5px] rounded-2xl no-underline text-lg font-medium capitalize hover:scale-[110%] hover:bg-darkYellow hover:shadow-md ease-in-out duration-200 customMd:text-xl' href='/about'>about</Link>
                <Link className='p-[5px] rounded-2xl no-underline text-lg font-medium capitalize hover:scale-[110%] hover:bg-darkYellow hover:shadow-md ease-in-out duration-200 customMd:text-xl' href='/work'>work</Link>
                <Link className='p-[5px] rounded-2xl no-underline text-lg font-medium capitalize hover:scale-[110%] hover:bg-darkYellow hover:shadow-md ease-in-out duration-200 customMd:text-xl' href='/contact'>contact</Link>
            </div>

            <div className=' customMd:hidden lg:flex flex justify-center items-center gap-[20px] py-1'>
                <a href="https://www.linkedin.com/in/nofil-shoaib-6b284328a" target='_blank'><Image className='ease-in-out duration-200 hover:scale-[110%]' src='/li.png' alt='linkedin' width={50} height={100}></Image></a>
                <a href="https://www.youtube.com/@Itsgamingwarden" target='_blank'><Image className='ease-in-out duration-200 hover:scale-[110%]' src='/yt.png' alt='youtube' width={50} height={200}></Image></a>
                <a href="https://github.com/MuhammadNofilShoaib" target='_blank'><Image className='ease-in-out duration-200 hover:scale-[110%]' src='/gh.png' alt='github' width={50} height={200}></Image></a>
                <a href="https://www.instagram.com/muhammad_nofil_shoaib/" target='_blank'><Image className='ease-in-out duration-200 hover:scale-[110%]' src='/ig.png' alt='instagram' width={50} height={200}></Image></a>
            </div>
        </div>
    )
}

export default Header
