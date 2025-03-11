import React, { useEffect } from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true });
    }, []);

    return (
        <main className="container">
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            <Clients />
            <Cta />
            <Footer />
        </main>
    );
};

export default Home;
