import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import Hero from './Hero';
import Blog from './Blog';
import Faq from './Faq';
import HowItWorks from '../../components/elements/HowItWorks';
import Pricing from './pricing';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <Pricing />
            <Faq />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;