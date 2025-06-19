import Link from "next/link";
import Footer from "../components/footer"
import '../app/globals.css';

export default function Login() {
  return (
    <div className="">
      <h1 className="flex justify-center items-center text-3xl m-10"
      >the-cursed-dating-app</h1>
      <div >
        <LoginFields fieldName="Password"></LoginFields>
        <LoginFields fieldName="Username"></LoginFields>
        <Link
            href={"/matches"}>
            <p>Log In</p>
        </Link>
      </div>
        <Footer></Footer>
    </div>
  );
}

function LoginFields({fieldName}: {fieldName: string}) {
  return(
    <div className="w-1/2 bg-slate-900">
      <label>{fieldName}:</label>
      <input className="text-gray-300 p-2 rounded-sm bg-slate-700 w-full" type="text"></input>
    </div>
  );
}