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
        name: 'bob',
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
           <button onClick={handleClick} className="bg-slate-600 w-20 h-10 hover:bg-pink-300 rounded-md m-1" value={rating}>
            {rating}
           </button>
        );
    }

    const pfpStyle = {
        margin: 'auto',
        marginBottom: '20px',
        borderRadius: '5px',

    }

    return (
        <div className="text-center  w-full mt-25 md:mt-30">
            <div className="bg-slate-800 w-80 h-110 p-5 m-auto rounded-xl">
                <div className="">
                    <p className="text-2xl mb-5">{user.name}</p>
                    {user.pfpURL && <Image 
                        src={user.pfpURL}
                        alt="pfp of person"
                        width={200}
                        height={200}
                        style={pfpStyle} />}
                    
                    <div className="flex wrap w-20/20 m-auto">
                        <SwipeButton rating={1} />
                        <SwipeButton rating={2} />
                        <SwipeButton rating={3} />
                        <SwipeButton rating={4} />
                        <SwipeButton rating={5} />
                        <SwipeButton rating={6} />
                    </div>

                </div>
            
             
            </div>
            <h3 className="mt-15 invisible md:visible overflow-hidden">
                presss enter to view next profile
            </h3>

        </div>
        
        
    )
}



 