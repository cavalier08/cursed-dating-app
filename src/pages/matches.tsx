import Link from "next/link";
import '../app/globals.css';
import { useState, useEffect } from 'react';
import UserProfile from "@/components/UserProfile";
import { fetchFromDjango } from "@/services/api";

export interface User {
    name: string,
    username: string,
    yourRank: number,
    theirRank: number
}

export default function Matches() {
    // Set state to be an array of JSON objects, each one representing a user you have ranked / who has ranked you
    const defaultUser = {  // default user, for testing UI only
        name: "Bob",
        username: "bobby",
        yourRank: 6,
        theirRank: 6
    };
    let users: User[] = [defaultUser];
    const [results, setResults] = useState(users);

    const URL = '';
    // Request matches from API immediately upon loading
    useEffect(() => {
        fetchFromDjango(URL).then((response) => {
            setResults(response);
        });
    }, []);

    return (
        <div>
            <Link
                href={"/settings"}>
                <p>User settings</p>
            </Link>
            <Link
                href={"/swiping"}>
                <p>Find potential matches!</p>
            </Link>
            <h2>Your matches:</h2>
            <div id="profiles">
                {results.map((match, index) => (
                    <UserProfile key={index} data={match} />
                ))}
            </div>
        </div>
    );
}