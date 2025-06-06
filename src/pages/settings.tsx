import Link from "next/link";
import '../app/globals.css';


export default function Matches() {
    return (
        <div>
            <Link
                href={"/matches"}>
                <p>Matches</p>
            </Link>
            <Link
                href={"/swiping"}>
                <p>Swiping page</p>
            </Link>
            <h3>Settings</h3>
        </div>
    );
}