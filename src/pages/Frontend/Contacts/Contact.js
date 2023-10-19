import React, { useState } from 'react';
import phone from '../../../assets/Images/telephone.png';
import email from '../../../assets/Images/email.png';
import location from '../../../assets/Images/location.png';
import { firestore, storage } from '../../../Firebase/Config';
import logo from '../../../assets/Images/nomiKing.png'
import { doc, setDoc, } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ref, uploadBytes } from 'firebase/storage';
import { useThemeContext } from '../../../Context/ThemeContext';

const initState = { name: '', email: '', number: '', detail: '', file: null };
const errorInitialState = { nameError: '', emailError: '', numberError: '', fileError: '' };

export default function Contact() {
  const { isDarkMode } = useThemeContext();
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState(errorInitialState);
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === 'file') {
      setState((prevState) => ({ ...prevState, file: files[0] }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  }

  const handleSubmit = async () => {
    const { name, email, number, detail, file } = state;
    const userData = { name, email, number, detail, id: Math.random().toString(36).slice(2) };
    let valid = true;

    // Basic validation checks
    if (!name) {
      setErrors((prevState) => ({ ...prevState, nameError: 'Name is required' }));
      valid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, nameError: '' }));
    }

    if (!email || !email.includes('@')) {
      setErrors((prevState) => ({ ...prevState, emailError: 'Valid email is required' }));
      valid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, emailError: '' }));
    }

    if (!number) {
      setErrors((prevState) => ({ ...prevState, numberError: 'Phone number is required' }));
      valid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, numberError: '' }));
    }

    if (!file) {
      setErrors((prevState) => ({ ...prevState, fileError: 'File upload is required' }));
      valid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, fileError: '' }));
    }

    if (valid) {
      try {
        setIsLoading(true)
        await setDoc(doc(firestore, 'Customer', userData.id), userData);

        const storageRef = ref(storage, 'userFiles/' + userData.id + '/' + file.name);
        await uploadBytes(storageRef, file);
        toast('Successfully Added! Your Data in Database');

        setState(initState);
        setIsLoading(false)
      } catch (error) {
        console.error('Sorry data not submitted', error);
        toast('Sorry Again, Please Try Again');
      }
    } else {
      toast('Please fill out all required fields.');
    }
  }


  return (
    <div className="container mx-auto pt-16" id='contact'>
      <div className='font-plus-jakarta'>
        <h2 className='font-bold mt-10 text-[36px] text-center text-[#7374F1]'>Contact me</h2>
        <p className='text-center'>Feels free to contact me for more details</p>
        <div className='flex flex-col-reverse lg:flex-row justify-around mt-16'>
          <div className={`w-200 ${isDarkMode ? 'bg-slate-800' : "bg-slate-200"} rounded-md flex justify-center flex-col p-10`}>
            <div className='mb-4 w-full'>
              <div className='mb-1'><label>Full Name</label></div>
              <input type="text" name='name' className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" placeholder="Full Name" onChange={handleChange} required />
              <div className="text-red-500">{errors.nameError}</div>
            </div>
            <div className='w-full'>
              <div className='mb-1'><label>Email</label></div>
              <input type="email" name='email' className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" placeholder="Email" onChange={handleChange} required />
              <div className="text-red-500">{errors.emailError}</div>
            </div>
            <div className='mb-4 w-full'>
              <div className='mb-1'><label>Phone Number</label></div>
              <input type="number" name='number' className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" placeholder="Phone Number" onChange={handleChange} required />
              <div className="text-red-500">{errors.numberError}</div>
            </div>
            <div className='w-full'>
              <div className='mb-1'><label>Project Design File (PSD or Figma)</label></div>
              <input type="file" name='file' accept=".pdf, .doc, .docx" className="p-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" onChange={handleChange} required
              />
              <div className="text-red-500">{errors.fileError}</div>
            </div>
            <div className='mt-4 w-full'>
              <div className='mb-1'><label>Project Details :</label></div>
              <textarea className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" placeholder="Project Details :" rows="3" name='detail' onChange={handleChange} required></textarea>
            </div>
            <div className='mt-5'>
              <button className={`bg-[#7E74F1] text-base py-3 px-4 rounded-md text-[#F5F3FE]`} onClick={handleSubmit}>
                {isLoading ? (
                  <div className="inline-flex space-x-2 items-center">
                    <div className="w-4 h-4 border-t-2 border-b-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Submit Message"
                )}
              </button>
              <div className='mt-2'>We will be in Touch soon!</div>
            </div>
          </div>
          <div className='w-full lg:w-4/12 mb-8 lg:mb-0 ms-8 lg:ms-0'>
            <div className="flex justify-center mb-10">
              <img src={logo} className='w-60' alt="" />
            </div>
            <div className='flex'>
              <div className='bg-[#7E74F1] flex justify-center items-center rounded-2xl w-11 h-11 '>
                <img src={phone} alt="image not found" />
              </div>
              <div className='ml-3 cursor-pointer '>
                <p className='text-base flex justify-start text-[#92929D]'>Call me</p>
                <p className='text-base font-medium hover:text-blue-500'>+92-305-7471443</p>
              </div>
            </div>
            <div className='flex mt-5'>
              <div className='bg-[#7E74F1] flex justify-center items-center rounded-2xl w-11 h-11 '>
                <img src={email} alt="image not found" />
              </div>
              <div className='ml-3 cursor-pointer'>
                <p className='text-base text-[#92929D] flex justify-start'>Email</p>
                <p className='text-base font-medium hover:text-blue-500'>mnaumanshabbir@gmail.com</p>
              </div>
            </div>
            <div className='flex mt-5'>
              <div className='bg-[#7E74F1] flex justify-center items-center rounded-2xl w-11 h-11 '>
                <img src={location} alt="image not found" />
              </div>
              <div className='ml-3 cursor-pointer'>
                <p className='text-base text-[#92929D] flex justify-start'>Address</p>
                <p className='text-base font-medium hover:text-blue-500'>Faisalabad, Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}
