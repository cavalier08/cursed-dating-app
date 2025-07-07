import Link from "next/link";
import Footer from "../components/Footer"
import '../app/globals.css';

export default function Login() {
  return (
    <div className="place-items-center grid h-screen">
      <div className="flex justify-center items-center ">
      <h1 className="text-3xl"
      >the-cursed-dating-app</h1>

      </div>
      
      
      <div className="p-4 bg-slate-800">
        <LoginFields fieldName="Username"></LoginFields>
        <LoginFields fieldName="Password"></LoginFields>

        <div className="w-full ">
          <Link 
              href={"/matches"}>
              <button className="w-1/2 bg-slate-700 hover:bg-slate-500 rounded-sm p-1 ">Log In</button>
          </Link>
          <Link 
              href={"/matches"}>
              <button className="w-1/2 bg-blue-900 hover:bg-slate-500 rounded-sm p-1">Sign Up</button>
          </Link>
        </div>
        
      </div>
        <Footer></Footer>
    </div>
  );
}

function LoginFields({fieldName}: {fieldName: string}) {
  return(
    <div className=" mb-4">
      <label>{fieldName}:</label>
      <input className="text-gray-300 p-2 rounded-sm bg-slate-700 hover:bg-slate-600 w-full" type="text"></input>
    </div>
  );
}