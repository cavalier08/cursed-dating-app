import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchFromDjango, postToDjango } from "@/routes/api";

interface User {
    name: string,
    username: string,
    pfpURL?: string
}

// profile of users to swipe on
export default function SwipeProfile() {
    const defaultUser: User = {
        name: '',
        username: '',
        pfpURL: "/grumpy_lucky.png"
    }
    const [user, setUser] = useState(defaultUser);

    // Gets a random user from the Django API and sets as current user
    const getRandomUser = () => {
        console.log("hi");
        postToDjango('random', { username: window.sessionStorage["username"] })
        .then((response) => {
            if (!response.success) {
                alert(response.error);
                return;
            }
            setUser({
                name: response.name,
                username: response.username
            });
        });
    }

    // Request a random user from API immediately upon loading
    useEffect(() => {
        getRandomUser();
    }, []);

    // Event handler for SwipeButtons
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const body = {
            thisUsername: window.sessionStorage["username"],
            otherUsername: user.username,
            rating: parseInt(event.currentTarget.value)
        }
        console.log(body);
        // Send POST request containing ranking to API
        postToDjango('rank', body);
        //getRandomUser();
    }

    function SwipeButton({rating}: {rating: number}) {
        return (
           <button onClick={handleClick} className="bg-slate-600 w-20 h-10 hover:bg-pink-300" value={rating}>
            {rating}
           </button>
        );
    }

    const pfpStyle = {

    }

    return (
        
        <div className="bg-slate-800 w-80 h-90 absolute bottom-0">
            <p className="text-lg p-2">{user.name}</p>
            {user.pfpURL && <Image 
                src={user.pfpURL}
                alt="pfp of person"
                width={200}
                height={200}
                style={pfpStyle} />}
            
            <div className="flex wrap absolute bottom-0 w-100">
            <SwipeButton rating={1} />
            <SwipeButton rating={2} />
            <SwipeButton rating={3} />
            <SwipeButton rating={4} />
            <SwipeButton rating={5} />
            <SwipeButton rating={6} />
            </div>
             
        </div>
    )
}



 