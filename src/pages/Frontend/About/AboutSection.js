import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import tabOne from '../../../assets/Images/tabOne.png';
import stickyNotes from '../../../assets/about/sticky-notes.png';
import abcStore from '../../../assets/about/abc-store.png';
import fakeone from '../../../assets/about/fake01.png';
import fakeTwo from '../../../assets/about/fake02.png';
import fakethree from '../../../assets/about/fake03.png';
import fakeFour from '../../../assets/about/fake04.png';
import fakeFive from '../../../assets/about/fake05.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useThemeContext } from '../../../Context/ThemeContext';

export default function AboutSection() {
  const { isDarkMode } = useThemeContext();

  const handleLink = () => {
    window.open("https://tailwindcss.com/docs/dark-mode", "_blank")
  }
  const handleAbcStore = () => {
    window.open("https://abc-book-store-90178.web.app", "_blank")
  }
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <>
      <div className='font-plus-jakarta pt-28' id="about">
        <h1 className="text-center font-bold text-[#7E74F1] text-[36px]">Featured Portfolios</h1>
        <p className='text-center'>Due to the client's policy. I can't show all of the projects that I've done.</p>
        <div className='px-3 2xl:px-32 mt-10'>
          <Tabs className="mt-5">
            <TabList className="flex flex-wrap justify-center bg-transparent">
              <Tab className="flex border-none me-5 mb-5 lg:mb-0"><button className='bg-[#7E74F1]  border border-[#7E74F1] rounded-full hover:bg-slate-200 hover:text-[#7E74F1] hover:font-bold text-white px-4 py-2'>All Projects</button></Tab>
              <Tab className="flex border-none me-5 mb-5 lg:mb-0"><button className='bg-[#7E74F1]  border border-[#7E74F1] rounded-full hover:bg-slate-200 hover:text-[#7E74F1] hover:font-bold text-white px-4 py-2'>React JS Projects</button></Tab>
              <Tab className="flex border-none me-5 mb-5 lg:mb-0"><button className='bg-[#7E74F1]  border border-[#7E74F1] rounded-full hover:bg-slate-200 hover:text-[#7E74F1] hover:font-bold text-white px-4 py-2'>MERN Stack Projects</button></Tab>
              <Tab className="flex border-none me-5 mb-5 lg:mb-0"><button className='bg-[#7E74F1]  border border-[#7E74F1] rounded-full hover:bg-slate-200 hover:text-[#7E74F1] hover:font-bold text-white px-4 py-2'>Bootstrap Projects</button></Tab>
            </TabList>

            <TabPanel>
              <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300"
                data-aos-offset="0" className='grid lg:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-around'>
                <div className='mt-5 me-3 '>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={stickyNotes}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>A convenient sticky notes app for quick, colorful reminders, lists, and notes, offering customization and seamless multi-device access.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]' onClick={handleLink}>E x p l o r e</button>
                    </div>
                  </div>
                </div>
                <div className='mt-5 me-3 '>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={abcStore}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Ecommerce Store</h2>
                    <p>Standard designing, building, and implementing our applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button onClick={handleAbcStore} className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={fakeone}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, building, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>

              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='grid lg:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between'>
                <div className='mt-5 me-3 '>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={fakeTwo}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, building, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>
                <div className='mt-5 me-3 '>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={fakethree}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, building, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={fakeFour}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, building, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>

              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='grid lg:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between'>
                <div className='mt-5 me-3 '>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={fakeFive}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, building, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>
                <div className='mt-5 me-3 '>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={fakeTwo}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, building, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <div className="p-6 shadow-lg rounded-2xl overflow-hidden" style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}>
                    <img
                      src={tabOne}
                      className='w-100 h-52 transform scale-100 hover:scale-110 transition-transform duration-1000' alt="image not found"
                    />
                    <h2 className='font-semibold text-[20px] mt-4 mb-2 '>Sticky Todo App</h2>
                    <p>Standard designing, buildings, and implementing your applications with documentation. Standard building, and implementing your designing.</p>
                    <div className="flex justify-end me-5 mt-8">
                      <button className='bg-[#F5F3FE] rounded-xl px-6 py-4 leading-6 tracking-wider text-[#7E74F1]'>E x p l o r e</button>
                    </div>
                  </div>
                </div>

              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div >
    </>
  )
}
