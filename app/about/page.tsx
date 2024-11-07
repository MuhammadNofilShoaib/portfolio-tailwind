import React from 'react'

function page() {
  return (
    <div className='font-sans my-[10px] mx-[15px] text-center customMd:m-[100px] customMd:text-left'>
    <div className='about-1 animate-leftAnimate'>
      <div className='text-darkYellow textCustomShadow text-7xl font-bold customMd:text-9xl'>
        <h1>about.</h1>
      </div>
      <div className="text-customBlue text-xl customMd:text-2xl">
        <p>Nofil Shoaib is a dedicated front-end developer with a passion for creating dynamic, responsive websites. Starting his journey with the Governor Sindh IT Initiative, he has honed his skills in HTML, CSS, TypeScript, and Tailwind CSS, becoming proficient in crafting seamless, engaging web experiences. His portfolio showcases a range of projects, from interactive multi-page sites to a custom resume builder, reflecting his commitment to quality and user-centered design. Skilled in Next.js and React, Nofil leverages modern frameworks to bring creative visions to life, always aiming for friendly, visually appealing, and efficient web solutions. He is now looking to connect with clients and showcase his abilities, driven by a desire to make a positive impact in the world of web development.</p>
      </div>
    </div>
    <div className="text-customBlue mt-[50px] text-left ml-0 grid grid-rows-3 mdMob:flex mdMob:flex-col mdMob:gap-[40px] customMd:mt-[100px] customMd:ml-[200px] customMd:gap-[60px customLg:ml-[350px] animate-rightAnimate">
      <div className="ab-1a">
        <h1 className='font-bold text-2xl customMd:text-3xl'>● 2021 - 2023</h1>
        <p className='text-xl customMd:text-2xl'>I began my academic journey at Cantab Grammar School, where I laid a strong foundation in core subjects. My hard work and dedication were rewarded when I completed matriculation with a 90% score from BSEK. This achievement was a stepping stone that fueled my passion for learning and academic excellence.</p>
      </div>
      <div className="ab-1b">
        <h1 className='font-bold text-2xl customMd:text-3xl'>● 2023 - Present</h1>
        <p className='text-xl customMd:text-2xl'>Continuing my education, I attended Govt. Delhi College for my 11th and 12th grades. Here, I further developed my analytical and problem-solving skills, focusing on subjects that would pave the way for my future in technology. The college experience enriched my understanding and prepared me for the next steps in my academic and professional journey.</p>
      </div>
      <div className="ab-1c pb-4">
        <h1 className='font-bold text-2xl customMd:text-3xl'>● 2023 - Present</h1>
        <p className='text-xl customMd:text-2xl'>Eager to enhance my technical skills, I joined the Governor Sindh IT Initiative, where I embarked on a path in web development. Under the guidance of experienced mentors, I honed my skills in front-end technologies, with a strong focus on building dynamic web applications using Next.js, TypeScript, and Tailwind CSS. This program has been transformative, solidifying my expertise and fueling my aspirations as a web developer.</p>
      </div>
    </div>
  </div>
  )
}

export default page
