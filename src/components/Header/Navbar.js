import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoPic from '../../assets/Images/logoNauman.png';
import { faDownload, } from '@fortawesome/free-solid-svg-icons';
import CV from '../../assets/CV/NAUMAN SHABBIR.pdf';
import { FaDownload, FaMoon, FaSun } from 'react-icons/fa'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useThemeContext } from '../../Context/ThemeContext';

export default function Navbar() {
  const { toggleButton, isDarkMode } = useThemeContext();


  const handleResume = () => {
    try {
      fetch(CV)
        .then(response => {
          if (response.ok) {
            response.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = fileURL;
              a.download = 'NaumanShabbir.pdf';
              a.click();
              window.URL.revokeObjectURL(fileURL);
            });
          } else {
            throw Error('Fetch request failed');
          }
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error('Other error:', error);
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop(); // Add this function to scroll to the top
  }

  return (
    <div >
      <nav className={`fixed-navbar z-10 w-full ${isDarkMode ? "bg-[#1b263d]" : 'bg-white'} h-16 flex justify-between px-3 md:px-16 items-center ${isDarkMode ? 'text-[#9d9dff]' : 'text-[#7374f1]'}`} style={{
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }}>
        <div className='flex items-center' onClick={scrollToTop}> {/* Add onClick to scroll to top when clicking the logo */}
          {/* <div className='bg-white w-10 h-10 rounded-full border border-black cursor-pointer me-2'>
            <img src={LogoPic} className='' alt="Logo" />
          </div> */}
          <span className='font-bold text-2xl cursor-pointer header-logo'>Nomi</span>
        </div>
        <ul className='text-lg font-semibold  lg:flex hidden'>
          <li className='px-4 cursor-pointer'>
            <ScrollLink className=' hover:border-b-4 hover:border-purple-700 active:border-b-4' to="home" smooth={true} duration={500}>About</ScrollLink> {/* Use ScrollLink for smooth scrolling */}
          </li>
          <li className='px-4 cursor-pointer'>
            <ScrollLink className=' hover:border-b-4 hover:border-purple-700 active:border-b-4' to="services" smooth={true} duration={500}>Experenice</ScrollLink>
          </li>
          <li className='px-4 cursor-pointer'>
            <ScrollLink className=' hover:border-b-4 hover:border-purple-700 active:border-b-4' to="about" smooth={true} duration={500}>Portfolio</ScrollLink>
          </li>
          <li className='px-4 cursor-pointer'>
            <ScrollLink className=' hover:border-b-4 hover:border-purple-700 active:border-b-4' to="blog" smooth={true} duration={500}>Blog</ScrollLink>
          </li>
          <li className='px-4 cursor-pointer'>
            <ScrollLink className=' hover:border-b-4 hover:border-purple-700 active:border-b-4' to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </li>
        </ul>
        <div className='items-center lg:flex hidden'>
          <button className='px-4 text-2xl cursor-pointer text-blue-500' onClick={toggleButton}>{isDarkMode ? <FaMoon /> : <FaSun />}</button>
          <button className='bg-transparent hover:text-white hover:bg-blue-600 border px-4 py-2 rounded border-[#7374f1] hover:border-[#7e74f1]' onClick={handleResume}>Resume <FontAwesomeIcon icon={faDownload} /></button>
        </div>
        <div className='text-2xl lg:hidden'>&#8801;</div>
      </nav>
    </div>
  );
}
