import Link from "next/link";
import '../app/globals.css';
import SwipeProfile from "../components/SwipeProfile";
import VerifyGoogleLogin from "@/components/VerifyGoogleLogin";


export default function Swiping() {
    return (
        <div>
            <VerifyGoogleLogin />
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