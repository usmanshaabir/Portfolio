import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    const date = new Date().getFullYear()
    const handleInstragram = () => {
        window.open("https://www.instagram.com/nauman_shabbir_43/?hl=en", "_blank")
    }
    return (
        <>
            <div className='bg-[#7374f1] py-4 text-center mt-20'>
                <div className=''>
                    <FontAwesomeIcon className='px-4 text-lg text-white cursor-pointer hover:text-slate-300' icon={faInstagram} onClick={handleInstragram} />
                    <FontAwesomeIcon className='px-4 text-lg text-white cursor-pointer hover:text-slate-300' icon={faSquareGithub} />
                    <FontAwesomeIcon className='px-4 text-lg text-white cursor-pointer hover:text-slate-300' icon={faTwitter} />
                    <FontAwesomeIcon className='px-4 text-lg text-white cursor-pointer hover:text-slate-300' icon={faLinkedinIn} />
                </div>
                <p className="text-sm mt-3 text-white ">Copyright ©{date}. All Rights Reserved</p>
            </div>
        </>
    )
}
