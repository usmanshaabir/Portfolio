import React, { useEffect } from 'react';
import mataverse from '../../../assets/blog/mataverse.jpg';
import web from '../../../assets/blog/Webdevelopmenttimeline.png';
import elonMask from '../../../assets/Images/elon.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useThemeContext } from '../../../Context/ThemeContext';

export default function Blogsection() {
  const { isDarkMode } = useThemeContext();
  const handleMataverse = () => {
    window.open("https://en.wikipedia.org/wiki/Metaverse", "_blank")
  }
  const handleWeb = () => {
    window.open("https://en.wikipedia.org/wiki/Metaverse", "_blank")

  }
  const handleMask = () => {
    window.open("https://en.wikipedia.org/wiki/Elon_Musk", "_blank")

  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <>
      <div className='text-center pt-28' id='blog'>
        <h2 className='text-[36px] font-bold font-plus-jakarta text-[#7374F1]'>Latest Blogs</h2>
        <p className='text-center'>Explore my insightful blog posts for valuable insights and expertise.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 home-card xl:grid-cols-3 lg:flex justify-center  font-plus-jakarta lg:justify-around lg:ps-10px lg:pe-10 lg:gap-10  xl:pe-0 xl:ps-0 xl:gap-0 sm:ps-[39px] mt-10'>
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
            className={`${isDarkMode ? 'bg-[#1e1d29]' : 'bg-[#dcd9df]'} rounded-3xl mb-4 w-80 lg:w-96`}>
            <img src={mataverse} className='w-full rounded-t-3xl' alt="image not found" />
            <div className='px-3 py-3'>
              <h2 className='text-[#7E74F1] text-[20px] font-medium leading-normal mt-4'>Metaverse Trends 2023</h2>
              <h5 className='font-medium text-[16px]'>October 12, 2023</h5>
              <p className='text-[16px] mt-4 mb-4'>
                metaverse is a hypothetical iteration of the Internet as a single, universal, and immersive virtual world that is facilitated by the use of virtual reality (VR) and augmented reality (AR) headsets. In colloquial usage, a metaverse is a network of 3D virtual worlds focused on social and economic
              </p>
              <div className='text-end me-5'>
                <a href="" className={` ${isDarkMode ? 'text-white' : 'text-black'} border-b ${isDarkMode ? 'border-white' : 'border-black'}`} onClick={handleMataverse}>Read More</a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            className={`${isDarkMode ? 'bg-[#1e1d29]' : 'bg-[#dcd9df]'} rounded-3xl mb-4  w-80 lg:w-96  `}>
            <img src={web} className='rounded-t-3xl' alt="image not found" />
            <div className='px-3 py-3'>
              <h2 className='text-[#7E74F1] text-[20px] font-medium leading-normal mt-4'>Web Development Trends 2023</h2>
              <h5 className='font-medium text-[16px]'>October 12, 2023</h5>
              <p className='text-[16px] mt-4 mb-4'>
                Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network) Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services
              </p>
              <div className='text-end me-5'>
                <a href="" className={` ${isDarkMode ? 'text-white' : 'text-black'} border-b ${isDarkMode ? 'border-white' : 'border-black'}`} onClick={handleWeb}>Read More</a>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
            data-aos-duration="500" className={`${isDarkMode ? 'bg-[#1e1d29]' : 'bg-[#dcd9df]'} -3xl mb-4  w-80 lg:w-96`}>
            <img src={elonMask} className='rounded-t-3xl h-80 w-full' alt="image not found" />
            <div className='px-3 py-3'>
              <h2 className='text-[#7E74F1] text-[20px] font-medium leading-normal mt-4'>Elon Mask Trends 2023</h2>
              <h5 className='font-medium text-[16px]'>October 13, 2023</h5>
              <p className='text-[16px] mt-4 mb-4'>
                Elon Reeve Musk born June 28, 1971 is a business magnate and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO
              </p>
              <div className='text-end me-5'>
                <a href="" className={` ${isDarkMode ? 'text-white' : 'text-black'} border-b ${isDarkMode ? 'border-white' : 'border-black'}`} onClick={handleMask}>Read More</a>
              </div>
            </div>
          </div >
        </div >
      </div >
    </>
  );
}
