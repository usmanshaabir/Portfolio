import React, { useEffect, useRef } from 'react';
import purpleDot from '../../../assets/Images/purple-circle.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Experience.css'
import { FaCalendar, FaCheck, FaUser, FaUsers } from 'react-icons/fa';

export default function Experience() {
  const counterRefs = {
    projectsCompleted: useRef(null),
    yearOfExperience: useRef(null),
    happyClients: useRef(null),
    projectsCompleted2: useRef(null),
  };

  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.2 };

    const handleCounterAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetNumber = parseInt(entry.target.getAttribute('data-target'));
          const counterElement = entry.target;
          let counter = 0;
          const increment = targetNumber / 100;

          const updateCounter = () => {
            if (counter < targetNumber) {
              counterElement.textContent = Math.floor(counter);
              counter += increment;
              requestAnimationFrame(updateCounter);
            } else {
              counterElement.textContent = targetNumber;
            }
          };

          updateCounter();
          observer.unobserve(entry.target);
        } else {

          entry.target.textContent = '0';
        }
      });
    };

    const observer = new IntersectionObserver(handleCounterAnimation, options);

    Object.values(counterRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(counterRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, [])
  return (
    <>
      <div className='mt-36 font-plus-jakarta py-24' id='services'>
        <p className='font-bold text-3xl text-center'>Professional Experience</p>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div>
            <div data-aos="zoom-out-up" className='lg:text-right mt-10 lg:mt-48 px-6 lg:ps-16'>
              <h5 className='text-base font-medium '>March-2022 - January 2023</h5>
              <h2 className='text-[20px] font-medium mb-5'>Frontend Developer</h2>
              <p className='lg:text-right '>I'm a frontend developer with a passion for crafting intuitive user experiences and translating design into seamless, interactive websites and web applications</p>
            </div>
            <div data-aos="zoom-out-up" className='mt-10 lg:mt-48 lg:text-right px-6 lg:ps-16'>
              <h5 className='text-base font-medium '>February-2023 - Continue</h5>
              <h2 className='text-[20px] font-medium mb-5'>React Js Developer</h2>
              <p className='lg:text-right '>I'm a React developer proficient in building dynamic and efficient web applications using the React.js framework to create engaging user interfaces.</p>
            </div>
          </div>
          <div className='lg:flex justify-center mt-16 relative hidden '>
            <div class="h-100 w-0.5  bg-[#656D72] flex ">
            </div>
            <img src={purpleDot} className='h-5 w-5 absolute  ' alt="" />
            <img src={purpleDot} className='h-5 w-5 absolute top-[33%] ' alt="" />
            <img src={purpleDot} className='h-5 w-5 absolute top-[66%]' alt="" />
            <img src={purpleDot} className='h-5 w-5 absolute top-[99%]' alt="" />
          </div>
          <div>
            <div data-aos="zoom-out-down" className='mt-10 lg:mt-16 px-6 lg:pe-16'>
              <h5 className='text-base font-medium '>February-2023 - Continue</h5>
              <h2 className='text-[20px] font-medium mb-5'>Junior Mean Stack Developer</h2>
              <p className=''>I'm a junior MERN stack developer eager to learn and contribute to building full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
            </div>
            <div data-aos="zoom-out-down" className='mt-10 lg:mt-44  px-6 lg:pe-16'>
              <h5 className='text-base font-medium '>February-2023 - Continue</h5>
              <h2 className='text-[20px] font-medium mb-5'>BootStrap/Tailwind Css Developer</h2>
              <p className=''>
                I'm a developer experienced in creating visually appealing and responsive web designs by utilizing Bootstrap and Tailwind CSS to enhance user interface aesthetics and usability.</p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className="container-fluid mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-5 counter__wrapper">
            <div className="counter section">
              <div className="counter__item">
                <span className="counter__icon">
                  <FaCheck />
                </span>
                <p><span className="counter__number" data-target="20" ref={counterRefs.projectsCompleted}>0</span>+</p>
                <h2 className="counter__title">Projects Completed</h2>
              </div>
            </div>

            <div className="counter section">
              <div className="counter__item">
                <span className="counter__icon">
                  <FaCalendar />
                </span>
                <p><span className="counter__number" data-target="1" ref={counterRefs.yearOfExperience}>0</span>+</p>
                <h2 className="counter__title">Year of Experience</h2>
              </div>
            </div>

            <div className="counter section">
              <div className="counter__item">
                <span className="counter__icon">
                  <FaUsers />
                </span>
                <p><span className="counter__number" data-target="5" ref={counterRefs.happyClients}>0</span>+</p>
                <h2 className="counter__title">Happy Clients</h2>
              </div>
            </div>

            <div className="counter section">
              <div className="counter__item">
                <span className="counter__icon">
                  <FaUser />
                </span>
                <p><span className="counter__number" data-target="10" ref={counterRefs.projectsCompleted2}>0</span>+</p>
                <h2 className="counter__title">Cup of Coffee</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
