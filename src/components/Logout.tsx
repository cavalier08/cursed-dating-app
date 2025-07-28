import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Logout() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/get-session', {
                headers: {
                    withCredentials: true
                }
            })

            setUser(response.data);
        } catch {
            console.log("there was an error logging out");
        }
    }

    getUser();

    const handleClick = () => {
        Cookies.remove('token');
        setUser(null);
        router.push('/login');
    }

    return (
        <button className="m-4 w-30 h-10 bg-slate-700 hover:bg-slate-500 rounded-sm p-1" onClick={handleClick}>
            Logout
        </button>
    )
}