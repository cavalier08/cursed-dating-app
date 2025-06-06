import Link from "next/link";

export default function Login() {
  return (
    <div>
        <p>Username:</p>
        <input type="text"></input>
        <p>Password:</p>
        <input type="text"></input>
        <Link
            href={"/matches"}>
            <p>Log In</p>
        </Link>
    </div>
  );
}
