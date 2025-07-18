import axios from 'axios';

const base_url = process.env.NEXT_PUBLIC_BACKEND_URL || '';

export default async function OAuthConnection(req: any, res: any) {
    try {
        const response = axios.get(base_url, {
            withCredentials: true,
            headers: {
                Cookie: req.headers.cookie || '',

            }
        });
        res.status(200).json((await response).data);
    } catch (error) {
        console.log("an error occurred");
    }
}