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

            try {
                const response = await axios.get('http://localhost:8000/api/get-session', {
                    withCredentials: true,
                })

                Cookies.set('token', response.data.token);
                setUser(response.data);
            } catch {
                console.log('session failed');
                router.push('/login');
            }
        }
        
        fetchToken();
    }, [router])

    /*
    if (!user) {
        useEffect(() => {
            router.push('/login');
        }, [router])
    }
*/
    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    )
}