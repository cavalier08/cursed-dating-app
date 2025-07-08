import Link from "next/link";
import '../app/globals.css';
import { useState, useEffect } from 'react';
import UserProfile from "../components/userProfile";

export default function Matches() {
    // Set state to be an array of JSON objects, each one representing a user you have ranked / who has ranked you
    const defaultUser = {  // this is just to set the type of the state
        name: "",
        username: "",
        yourRank: -1,
        theirRank: -1
    };
    const [results, setResults] = useState([defaultUser]);

    // Request matches from API
    const URL = '';
    async function getMatches() {
        const response = await fetch(URL);
        const body = await response.json();
        setResults(body);
    }
    // Send request immediately upon loading
    useEffect(() => {
        getMatches();
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