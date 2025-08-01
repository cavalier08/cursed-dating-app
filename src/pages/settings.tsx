import Link from "next/link";
import '../app/globals.css';
import NavBar from '../components/NavBar';


export default function Matches() {
    return (
        <div>
            <NavBar href1="matches" page1="Matches" href2="swiping" page2="Swiping" title="settings"/>
            
        </div>
    );
}