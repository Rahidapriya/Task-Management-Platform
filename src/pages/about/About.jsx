import React from 'react';
import about from '../../assets/about.png'
import Navbar from '../../components/shared/navbar/Navbar';
import Footer from '../../components/shared/footer/Footer';

const About = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center  py-20 px-10 lg:px-20'>
           <div className=''>
            <img src={about} className='w-full' alt="" />
            </div> 
            <div className='  mx-auto '>
            <h1 className='text-3xl font-bold text-purple-600 '>Discover the Power of Todoist</h1>
      <p className='text-xl font-bold ' >Your Premier Task Management Solution</p>
                <p className='mt-10 bg-purple-400 p-5 rounded-tl-3xl text-white'>
        At Todoist, we believe in simplifying your life by helping you stay organized and focused on what matters most. Our mission is to provide you with a powerful and intuitive task management platform that empowers individuals and teams to achieve their goals efficiently.
      </p>
      <p className='mt-10 bg-purple-600 p-5 rounded-tr-3xl text-white'>
        Whether you're a professional looking to boost productivity, a student juggling multiple assignments, or a team collaborating on projects, Todoist is designed to adapt to your unique needs. With a user-friendly interface and a robust set of features, we strive to make task management an effortless and enjoyable experience for everyone.
      </p>
      <p className='mt-10 bg-purple-900 p-5 rounded-bl-3xl text-white'>
        Join the millions of users who trust Todoist to streamline their tasks, enhance collaboration, and bring clarity to their daily lives. Explore the possibilities, stay organized, and make every moment count with Todoist.
      </p>
            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default About;