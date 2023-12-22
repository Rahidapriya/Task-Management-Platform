
import svg from '../../assets/svg.png';
import banner from '../../assets/banner2.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    const containerStyle = {
        backgroundImage: `url(${svg})`,
    
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="relative h-screen flex flex-col-reverse lg:flex-row   justify-center items-center px-10" style={containerStyle}>
            <div className=" lg:text-left text-center z-10 lg:w-5/12 mx-auto text-black ">
                <h1 className="md:text-4xl text-2xl lg:text-6xl font-bold mb-4 text-black logo">Welcome to Todoist </h1>
                <p className="text-normal lg:text-2xl font-bold">Your Ultimate Time Management Solution! </p>
                <p className='text-sm mt-5 lg:text-xl md:w-10/12 lg:w-full md:mx-auto  text-gray-900'>Stay organized, focused, and in control of your tasks effortlessly. Elevate your productivity and manage your time like never before. Todoist, where organization meets simplicity for a more productive you!</p>
                <Link to={`/dashboard/userdashboard`}><button className='lg:px-6 lg:py-3 px-2 border-white  rounded-lg lg:mt-5 mt-2' style={{ border: '2px solid white', backgroundColor: 'transparent' }}>Let's Explore</button></Link>

            </div>
            <div className="ml-auto">
                <img src={banner} className="w-9/12 h-9/12 lg:w-full " alt="" />
            </div>
        </div>
    );
};

export default Banner;
