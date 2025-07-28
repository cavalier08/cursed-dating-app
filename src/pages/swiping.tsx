import '../app/globals.css';
import SwipeProfile from "../components/SwipeProfile";
import VerifyGoogleLogin from "@/components/VerifyGoogleLogin";
import NavBar from "../components/NavBar";


export default function Swiping() {


    return (
        <div>
            <VerifyGoogleLogin />
            <NavBar href1="settings" page1="Settings" href2="matches" page2="Matches" title="swiping screen" />
            
            <div className="w-full flex justify-center">
                <SwipeProfile />
            </div>
        </div>
    );
}