import {useRouter} from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';

export default function VerifyGoogleLogin() {

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');

        // if token invalid redirects to login page
        if (!token) {
            router.push('\login');
            return;
        }

        const googleResponse = async () => {
            try {
                const response = await axios.get('/api/auth/verify', {
                    headers: {
                        Authorization: `Headers: {token}`,
                    },
                })
               setUser(response.data);
            } catch {
                Cookies.remove('token');
                router.push('/login');
            }
        }

    }, [router])

    if (!user) {
        useEffect(() => {
            router.push('/login');
        }, [router])
        return;
    }

    return (
        <div>
            <h1>Welcome {user}</h1>
        </div>
    )
}