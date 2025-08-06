import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Logout() {
    const router = useRouter();
    const logout_url = process.env.NEXT_LOGOUT_URL || '';



    const handleClick = async () => {
        try {
            await axios.get(logout_url, {
                withCredentials: true,
            })

            Cookies.remove('token');
            router.push('/login');

        } catch {
            console.log("failed to sign out");
        }
    }

    return (
        <button className="m-4 w-30 h-10 bg-slate-700 hover:bg-slate-500 rounded-sm p-1" onClick={handleClick}>
            Logout
        </button>
    )
}