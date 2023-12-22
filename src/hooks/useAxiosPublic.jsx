import axios from 'axios';

const axiosPublic = axios.create({
    baseURL:'server-site-task-management-platform.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;