import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className=" font-metamorphous"> 
      
        <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayout;