import { useRouter } from 'next/navigation';
import {useEffect} from 'react';
import Cookies from 'js-cookie';

const googleRedirect = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT || '';

export default function OAuth() {
    const router = useRouter();
    const handleLogin = (): void => {
        window.location.href = googleRedirect;
    }

    useEffect(() => {

        const {token} = router as {token?: string};

        if (token) {
            Cookies.set('token', token);
            router.push('/matches');
        }
    }, [router])

    return (
        <div>
            <button className="w-full bg-slate-900 hover:bg-slate-500 rounded-sm p-1 mt-4" onClick={handleLogin}>Login with Google</button>
        </div>
    )

}