import axios from 'axios';

const axiosSecure = axios.create({
    baseURL:'server-site-task-management-platform.vercel.app'
}) 
const useAxiosSecure=()=>{
    return axiosSecure;
}

export default useAxiosSecure;