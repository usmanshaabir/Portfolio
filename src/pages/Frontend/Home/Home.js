import React from 'react';
import globe from '../../../assets/Images/globe.png'
import 'aos/dist/aos.css';
import { useThemeContext } from '../../../Context/ThemeContext';

export default function Home() {
  const { isDarkMode } = useThemeContext();


  return (
    <>
      <div className='' id='home'>
        <p className='text-center mt-32 text-3xl font-bold mb-16'>Specialized In</p>
        <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:ms-28 md:ms-[2rem] home-card  gap-10 xl:flex justify-center items-center'>
          <div data-aos="flip-left" className={`hover:bg-purple-600 hover:text-white cursor-pointer transition-all shadow-lg w-80 h-72 rounded-lg flex-col flex justify-center items-center`} style={{
            boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}>
            <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex place-content-center items-center mb-4'>
              <img src={globe} alt="image not found" />
            </div>
            <p className='mb-5 font-semibold'>React Js</p>
            <p className='text-center px-7 leading-6 font-normal'>
              I am a React developer, crafting dynamic and user-friendly web interfaces with expertise in React, JavaScript, and front-end technologies.
            </p>
          </div>

          <div data-aos="flip-left" className={`{'border border-[#DEDEDE] hover:bg-purple-600 hover:text-white cursor-pointer transition-all shadow-lg  w-80 h-72 rounded-lg flex-col flex justify-center items-center`} style={{
            boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}>
            <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex place-content-center items-center mb-4'>
              <img src={globe} alt="image not found" />
            </div>
            <p className='mb-5 font-semibold'>MERN Stack</p>
            <p className='text-center px-7 leading-6 font-normal '>I am a MERN developer, specializing in full-stack web development using the MongoDB, Express, React, and Node.js stack to create robust and scalable applications</p>
          </div>
          <div data-aos="flip-right" className={`{'border border-[#DEDEDE] hover:bg-purple-600 hover:text-white cursor-pointer transition-all shadow-lg  w-80 h-72 rounded-lg flex-col flex justify-center items-center`} style={{
            boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}>
            <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex place-content-center items-center mb-4'>
              <img src={globe} alt="image not found" />
            </div>
            <p className='mb-5 font-semibold'>Bootstrap & Tailwind Css</p>
            <p className='text-center px-7 leading-6 font-normal '>I am a developer skilled in Bootstrap and Tailwind CSS, proficient in creating responsive and visually appealing web designs</p>
          </div>
          <div data-aos="flip-right" className={`{'border border-[#DEDEDE] hover:bg-purple-600 hover:text-white cursor-pointer transition-all shadow-lg  w-80 h-72 rounded-lg flex-col flex justify-center items-center`} style={{
            boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}>
            <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex place-content-center items-center mb-4'>
              <img src={globe} alt="image not found" />
            </div>
            <p className='mb-5 font-semibold'>Bootstrap & Tailwind Css</p>
            <p className='text-center px-7 leading-6 font-normal '>I am a developer skilled in Bootstrap and Tailwind CSS, proficient in creating responsive and visually appealing web designs</p>
          </div>
        </div>
      </div>
    </>
  )
}
