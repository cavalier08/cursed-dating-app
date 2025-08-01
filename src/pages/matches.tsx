import '../app/globals.css';
import { useState, useEffect } from 'react';
import UserProfile from "@/components/UserProfile";
import { fetchFromDjango } from "@/routes/api";
import NavBar from "../components/NavBar"

export interface User {
    name: string,
    username: string,
    yourRank: number,
    theirRank: number
    theirPfP?: string,
}

export default function Matches() {
    // Set state to be an array of JSON objects, each one representing a user you have ranked / who has ranked you
    const defaultUser = {  // default user, for testing UI only
        name: "Bob",
        username: "bobby",
        yourRank: 6,
        theirRank: 1,
        theirPfP: '/grumpy_lucky.png',
    };
    let users: User[] = [defaultUser];
    const [results, setResults] = useState(users);

    // Request matches from API immediately upon loading
    useEffect(() => {
        /* Don't uncomment this until API is set up
        const URL = '';
        fetchFromDjango(URL).then((response) => {
            setResults(response);
        });*/
    }, []);

    return (
        <div>
            <NavBar href1="settings" page1="Settings" href2="swiping" page2="Swiping" title="Matches"/>

            
            <div className="md:flex w-17/20 bg-slate-800 m-auto mt-20" id="profiles">
                {results.map((match, index) => (
                    <UserProfile key={index} data={match} />
                ))}
            </div>
        </div>
    );
}