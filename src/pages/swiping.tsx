import Link from "next/link";

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
        </div>
    );
}