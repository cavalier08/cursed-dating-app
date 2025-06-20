import Link from "next/link";
import Footer from "../components/footer"
import '../app/globals.css';

export default function Login() {
  return (
    <div className="">
      <h1 className="flex justify-center items-center text-3xl m-10"
      >the-cursed-dating-app</h1>
      <div className="w-full">
        <LoginFields fieldName="Password"></LoginFields>
        <LoginFields fieldName="Username"></LoginFields>
        <Link 
            href={"/matches"}>
            <button className="ml-4 w-1/4 bg-slate-700 hover:bg-slate-500 rounded-sm p-1">Log In</button>
        </Link>
      </div>
        <Footer></Footer>
    </div>
  );
}

function LoginFields({fieldName}: {fieldName: string}) {
  return(
    <div className="w-1/2 bg-slate-900 m-4">
      <label>{fieldName}:</label>
      <input className="text-gray-300 p-2 rounded-sm bg-slate-700 hover:bg-slate-600 w-full" type="text"></input>
    </div>
  );
}