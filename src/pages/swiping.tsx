import Link from "next/link";
import '../app/globals.css';
import SwipeProfile from "../components/SwipeProfile";


export default function Matches() {
    return (
        <div>
            <Link
                href={"/settings"}>
                <p>User settings</p>
            </Link>
            <Link
                href={"/matches"}>
                <p>See your matches</p>
            </Link>
            <h2>[swiping screen]</h2>
            <div className="w-full flex justify-center">
                <SwipeProfile />
            </div>
        </div>
    );
}