import React from 'react';
import About from './About';
import Banner from './Banner';
import Contuctme from './Contuctme';
import Footer from './Footer';
import MyProject from './MyProject';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MyProject></MyProject>

            <Contuctme></Contuctme>
            <Footer></Footer>
        </div>
    );
};

export default Home;