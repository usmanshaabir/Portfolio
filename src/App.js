import './App.css';
import AuthContextProvider from './Context/AuthContext';
import Home from './pages/Frontend/Home'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer.js'
import ThemeContextProvider from './Context/ThemeContext';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <Home />
          <Footer />
          <div className="main-links-hero">
            <div className="icons" style={{
              left: '50px',
              position: 'fixed',
              bottom: '0',
              transition: 'all ease .5s',
            }}>
              <span className='icons-span mt-0'>
                <a href="" target='__blank'>
                  <FaLinkedinIn size={22} />
                </a>
              </span>
              <span className='icons-span mt-0'>
                <a href="" target='__blank'>
                  <FaGithub size={22} />
                </a>
              </span>
              <span className='icons-span mt-0'>
                <a href="" target='__blank'>         {/*  give the urls of your social media links */}
                  <FaFacebookF size={22} />
                </a>
              </span>
              <span className='icons-span mt-0'>
                <a href="" target='__blank'>
                  <FaInstagram size={22} />
                </a>
              </span>
              <span className='icons-span mt-0'>
                <a href="">
                  <FaWhatsapp size={22} />
                </a>
              </span>
              <div className='vertical-line ms-3'></div>
            </div>
          </div>
          <div className={`contentContainer show logoScreen1:block fixed bottom-0 right-[25px]`}>
            <div className="w-[2.5rem] flex flex-col justify-between items-center">
              <a className="email-link" href="mailto:mnaumanshabbir@gmail.com">
                mnaumanshabbir@gmail.com
              </a>
              <div className="vertical-line"></div>
            </div>
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
