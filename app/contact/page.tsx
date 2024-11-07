import React from 'react'

function page() {
  return (
    <div className='p-[50px] flex justify-center items-center font-sans my-[10px] mx-[15px] customMd:m-[100px]'>
      <div className='flex flex-col text-customBlue capitalize justify-center items-center gap-4'>
      <div className="text-center customMd:text-left animate-leftAnimate ">
        <h1 className='text-darkYellow textCustomShadow text-7xl font-bold customMd:text-9xl lowercase'>contact.</h1>
        <p className='py-4 text-lg'>Whether you’re interested in collaborating on a project, have a question, or just want to say hello, I’d love to hear from you! As a dedicated front-end developer, I’m always open to new opportunities and connections. Feel free to reach out through the form below or contact me directly via email or phone. Let’s build something great together!</p>
      </div> 
        <div className='text-center'>
            <h1 className='text-xl font-semibold animate-rightAnimate'>name:</h1>
            <input className='w-[250px] h-[40px] px-2 rounded-md bg-yellow-50 border border-darkYellow customShadow customMd:w-[450px] customLg:w-[650px] animate-rightAnimate' type="text" />
        </div>
        <div className='text-center'>
            <h1 className='text-xl font-semibold animate-rightAnimate'>email:</h1>
            <input className='w-[250px] h-[40px] px-2 rounded-md bg-yellow-50 border border-darkYellow customShadow customMd:w-[450px] customLg:w-[650px] animate-rightAnimate' type="email" />
        </div>
        <div className='text-center'>
            <h1 className='text-xl font-semibold animate-rightAnimate'>message:</h1>
            <input className='w-[250px] h-[40px] px-2 rounded-md bg-yellow-50 border border-darkYellow customShadow customMd:w-[450px] customLg:w-[650px] animate-rightAnimate' type="text" />
        </div>
        <div className=' animate-rightAnimate pb-20'>
        <a href="/contact"><button className="font-sans w-[114px] h-[38px] my-[10px] bg-darkYellow uppercase text-xl outline-none rounded-[6px] border border-customBorder customShadow ease-in-out duration-200 hover:translate-y-1 hover:saturate-[130%] customMd:w-[164px] customMd:h-[48px]">submit</button></a> 

        </div>
      </div>
    </div>
  )
}

export default page
