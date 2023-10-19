import React from 'react';
import Home from './Home';
import Header from '../../../components/Header/Header'
import About from '../About';
import Services from '../Services';
import Blog from '../Blog';
import Contact from '../Contacts/Contact';


export default function index() {
    return (
        <>
            <Header />
            <Home />
            <Services />
            <About />
            <Blog />
            <Contact />
        </>
    )
}
