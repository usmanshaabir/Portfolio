import React, { useEffect, useState } from 'react';
import nomiKing from '../../assets/Images/nomiKing.png';
import CV from '../../assets/CV/Nauman+Shabbir+React+JS.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Type from '../Home/Type';
import { useThemeContext } from '../../Context/ThemeContext';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const { isDarkMode } = useThemeContext();
  const [activeButton, setActiveButton] = useState('');

  const handleActive = (event) => {
    if (activeButton === event) {
      setActiveButton('');
      fetch(CV)
        .then((response) => {
          if (response.ok) {
            return response.blob().then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'SamplePDF.pdf';
              a.click();
              window.URL.revokeObjectURL(url);
            });
          }
        })
        .catch((error) => {
          console.error('Error fetching the PDF:', error);
        });
    } else {
      setActiveButton(event);
    }
  }

  const isActive = (elementId) => {
    return activeButton === elementId ? 'active' : '';
  }

  useEffect(() => {
    setActiveButton('download')
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <>
      <div className={`${isDarkMode ? 'bg-[#111827]' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'}  grid grid-cols-1 lg:grid-cols-2 h-100 items-center md:px-28 px-4 pt-32 pb-16`}>
        <div className=''>
          <h1 className='text-3xl mb-3'>Hi, There! <span class="wave"> 👋</span></h1>
          <h1 aria-label="Hi! I'm a developer" className='text-[#7E74F1] text-3xl font-bold'>I'm &nbsp;Nauman <span className='text-[#7E74F1]'>Shabbir</span></h1>
          <span class="typewriter font-bold text-xl text-[#7E74F1]"><Type /></span>
          <p className='mt-6 text-start'>I am a creative front-end developer with over two years of hands-on experience in both enterprise-level companies and dynamic startup environments. My expertise lies in crafting captivating and user-friendly web interfaces using a diverse skill set that encompasses HTML, CSS, SCSS, JavaScript, and React.</p>
          <div className='flex mt-10 justify-center md:justify-start'>
            <div>
              <button className={`text-white rounded-md border border-[#7E74F1] bg-[#7e74f1] px-4 py-3 text-md me-5 ${isActive('download')}`} id='download' onClick={() => handleActive('download')}>Download CV</button>
            </div>
            <div>
              <ScrollLink to='contact' duration={500} smooth={true}>
                <button className={`text-black bg-gray-300 rounded-md px-4 py-3 border border-gray-300>Have a project`}>Have a Project </button>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className='flex justify-end items-center' data-aos='zoom-in-up'>
          <img src={nomiKing} alt="image not found" />
        </div>
      </div >
    </>
  );
}
