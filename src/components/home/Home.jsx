import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Banner from '../banner/Banner';
import Banefit from '../banefit/Banefit';
import Footer from '../shared/footer/Footer';
import AddTask from '../../pages/addTask/AddTask';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Banefit></Banefit>
            <AddTask></AddTask>
            <Footer></Footer>
        </div>
    );
};

export default Home;