import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from "../HeroSection";


function Home(props) {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;