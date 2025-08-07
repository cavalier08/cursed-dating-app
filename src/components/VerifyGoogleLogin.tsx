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
                Cookies.set('name', response.data.user.first_name);
                Cookies.set('email', response.data.user.email);
                console.log("user name:", Cookies.get('name'));
                console.log('cookie set');
                setUser(response.data);
                
            } catch {
                console.log('womp womp');
            }

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