import Image from 'next/image';
import React from 'react';

function page() {
  return (
    <div>
      <div className='font-sans work text-center my-[10px] mx-[15px] customMd:m-[100px] '>
        <div className="work-1 customMd:text-left animate-leftAnimate">
            <div className="workHeading text-darkYellow textCustomShadow text-7xl font-bold customMd:text-9xl">
                <h1>work.</h1>
            </div>
            <div className="workPara text-customBlue text-xl customMd:text-2xl">
                <p>Nofil Shoaib is a skilled front-end developer who brings creativity and precision to every project. His expertise in HTML, CSS, TypeScript, and Tailwind CSS enables him to craft engaging, user-friendly interfaces that look great on any device. Recently, he built a multi-page website using Next.js, React components, and custom CSS to ensure responsive design. Nofil has also developed a resume builder, demonstrating his versatility and problem-solving skills in web development. With a commitment to modern design and efficient code, he strives to deliver top-notch web solutions that align with the latest industry standards.</p>
            </div>
        </div>
        <div className="work-2 mt-[50px] ml-[0px] text-left grid grid-cols-1 gap-[50px] customMd:grid-cols-2 my-[150px] animate-rightAnimate">
        <div className="image1 flex flex-col justify-center items-center text-center text-customBlue  customMd:mt-[100px] scroll">
        <a href="https://resume-builder-final-nofil.vercel.app/" target='_blank'><Image className="workPic w-[250px] h-[250px] object-cover rounded-2xl  border-2 border-darkYellow customShadow2 customMd:w-[300px] customMd:h-[300px] customLg:w-[506px] customLg:h-[409px] hover:rotate-2 hover:scale-[102%] ease-in-out duration-300" src='/resume_main.png' alt="resume_builder" width={560} height={400}></Image></a>
            <p className="p1 py-[5px] text-base italic"> 
            September 10, 2024
            </p>
            <h1 className='imageHead p-[0px] text-2xl font-bold customMd:py-[10px] uppercase'>resume builder</h1>
            <p className='p2 my-0 mx-[5px] customMd:text-xl customMd:mx-[20px]'>Each resume template is designed to follow the exact rules you need to get hired faster. Use our resume templates and get free access to 18 more career tools!</p> 
        </div>
        <div className="image2 flex flex-col justify-center items-center text-center text-customBlue customMd:mt-[100px] scroll">
        <Image className="workPic w-[250px] h-[250px] object-cover rounded-2xl customShadow2  border border-darkYellow customMd:w-[300px] customMd:h-[300px] customLg:w-[506px] customLg:h-[409px] hover:-rotate-2 hover:scale-[102%] ease-in-out duration-300" src='/im2.png' alt="nofilshoaib" width={560} height={400}></Image>
            
                <p className="p1 py-[5px] text-base italic">November 24, 2019</p>
            <h1 className='imageHead p-[0px] text-2xl font-bold customMd:py-[10px]'>Some Case Study</h1>
            <p className='p2 my-0 mx-[5px] customMd:text-xl customMd:mx-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
