import {useRouter} from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';

export default function VerifyGoogleLogin() {

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchToken = async () => {
            console.log("hello");

            if (Cookies.get('token') == null) {
                console.log("user not logged in");
                router.push('/login');
            }

            console.log("user token:", Cookies.get('token'));
            
        }
        
        fetchToken();
    }, [router])
    return (
        <div>
        </div>
    )
}