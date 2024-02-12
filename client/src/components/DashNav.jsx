import React from 'react'
import useLogout from '../hooks/useLogout';
import {useNavigate} from 'react-router-dom'

const DashNav = () => {

    const logout = useLogout();
    const navigate = useNavigate();
    
    const signout = async () => {
        await logout();
        navigate('/');
    }

    return (
        <nav className='absolute z-10 h-20 top-0 left-0 right-0 w-full text-white font-semibold text-xl bg-blue-500 p-12 flex justify-between items-center'>
            <h1>welcome Firas</h1>
            <ul className='flex gap-32 items-cente'>
                <li><button>articles</button></li>
                <li><button>events</button></li>
                <li><button>newsletter</button></li>
                <li><button>emails</button></li>
            </ul>
            <button onClick={signout}>log out</button>
        </nav>
    )
}

export default DashNav