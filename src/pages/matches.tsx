import Link from "next/link";

export default function Matches() {
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
        </div>
    );
}