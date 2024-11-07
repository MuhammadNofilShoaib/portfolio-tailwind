import Image from "next/image";

export default function Home() {
  return (
    <div className="bg- lightYellow sm:bg-[colorName] min-h-screen">
      <div className="my-[30px] mx-[10px] grid grid-cols-1 customMd:grid-cols-2 customLg:m-[100px] customLg:grid-cols-2 customMd:mt-32">
        <div className="flex items-center justify-center text-customBlue flex-col animate-leftAnimate">
          <p className="text-xl m-0 p-0 capitalize customLg:py-[15px] customLg:text-2xl  customLg:-my-[10px] font-sans">hello, i&apos;m nofil,</p>  
          <p className="italic font-serif capitalize text-5xl m-0 p-0 font-semibold customMd:text-7xl customLg:-my-[10px] customLg:text-[100px]">front end</p>
          <p className="italic font-serif capitalize text-5xl m-0 p-0 font-semibold customMd:text-7xl customLg:-my-[10px] customLg:text-[100px] customLg:pb-4">developer</p>
          <p className="text-xl m-0 mt-1 p-0 capitalize customLg:py-[15px] customLg:text-2xl customLg:-my-[10px] font-sans">based in pakistan</p>
          <a download='/resume.pdf' href="/resume.pdf"><button className="font-sans w-[114px] h-[38px] my-[10px] bg-darkYellow uppercase text-xl outline-none rounded-[6px] border border-customBorder customShadow ease-in-out duration-200 hover:translate-y-1 hover:saturate-[130%] customMd:w-[164px] customMd:h-[48px]">resume</button></a> 
        </div>
        <div className="flex justify-center items-center"> 
        <Image className="animate-rightAnimate w-[250px] h-[250px] my-[10px] rounded-full border-2 border-customBorder customShadow customMd:w-[350px] customMd:h-[350px] hover:customMd:h-[360px] hover:customMd:w-[360px] customLg:w-[506px] customLg:h-[506px] hover:customLg:h-[512px] hover:customLg:w-[512px] duration-300 ease-in-out" src='/nofil.png' alt="nofilshoaib" width={506} height={509}></Image>
      </div>
      </div>
    </div>
  );
}
