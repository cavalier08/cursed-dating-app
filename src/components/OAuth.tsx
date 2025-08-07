import axios from 'axios';
import Cookies from 'js-cookie';
import {useState} from 'react';
const googleRedirect = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT || '';

export default function OAuth() {
    const [user, setUser] = useState(null);
    

    const handleLogin = async () => {
        window.location.href = googleRedirect;
        
    }


    

    return (
        <div>
            <button className="w-full bg-slate-900 hover:bg-slate-500 rounded-sm p-1 mt-4" onClick={handleLogin}>Login with Google</button>
        </div>
    )

}