import Link from "next/link";
import '../app/globals.css';
import SwipeProfile from "../components/SwipeProfile";
import VerifyGoogleLogin from "@/components/VerifyGoogleLogin";
import Logout from "../components/Logout";


export default function Swiping() {


    return (
        <div>
            <VerifyGoogleLogin />
            <div className="w-full h-15 flex justify-end">
                <Link
                    href={"/settings"}>
                    <button className="w-30 h-10 bg-blue-900 hover:bg-slate-500 rounded-sm p-1 text-center m-4">Settings</button>
                </Link>
                <Logout />

            </div>
            
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