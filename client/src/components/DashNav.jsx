import React, {useState, useEffect} from 'react'
import useLogout from '../hooks/useLogout';
import {useNavigate} from 'react-router-dom'
import useAxiosPrivate from '../hooks/useAxioxPrivate'
import axios from '../api/axios';


const DashNav = () => {
    const [userData, setUserData] = useState({});
    const axiosPrivate = useAxiosPrivate();

    const getUserData = async () => {
        try {
            const result = await axiosPrivate.get("/auth/getinfo");
            setUserData(result.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        getUserData();
    }, [])


    const logout = useLogout();
    const navigate = useNavigate();
    
    const signout = async () => {
        await logout();
        navigate('/');
    }

    return (
        <nav className='absolute z-10 h-20 top-0 left-0 right-0 w-full text-white font-semibold text-xl bg-blue-500 px-12 flex justify-between items-center'>
            <h1>welcome {userData.fullName}</h1>
            <ul className='flex items-center h-full'>
                <li className='hover:bg-blue-400 h-full w-40'><button className='w-full h-full'>articles</button></li>
                <li className='hover:bg-blue-400 h-full w-40'><button className='w-full h-full'>events</button></li>
                <li className='hover:bg-blue-400 h-full w-40'><button className='w-full h-full'>newsletter</button></li>
                <li className='hover:bg-blue-400 h-full w-40'><button className='w-full h-full'>emails</button></li>
            </ul>
            <button className='hover:underline underline-offset-2' onClick={signout}>log out</button>
        </nav>
    )
}

export default DashNav