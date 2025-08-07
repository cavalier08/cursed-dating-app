import Link from "next/link";
import '../app/globals.css';
import TextInput from "@/components/TextInput";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { fetchFromDjango, postToDjango } from "../routes/api";
import OAuth from '../components/OAuth';
import Cookies from 'js-cookie';

interface User {
    name?: string,
    username: string,
    password: string
}

// API body response for /login/ and /signup/ must follow this format!
export interface LoginResponse {
  success: boolean,
  token?: string,
  error?: string
}

export default function LoginForm({signup}: {signup: boolean}) {
    const [user, setUser] = useState<User>({
        username: "",
        password: ""
    });
    const Router = useRouter();

    // Event handler for LoginButton, called upon login
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
        // Ensure all fields are present
        if ((!user.name || user.name == "") && signup) {   // name input only necessary during signup
            alert("Please enter your name!");
            return;
        } if (user.username == "") {
            alert("Please enter a username!");
            return;
        } if (user.password == "") {
            alert("Please enter a password!");
            return;
        }
        // Send POST request containing username / password to API
        const endpoint = signup ? 'signup' : 'login';
        const response: LoginResponse = await postToDjango(endpoint, user);

        // If successful, redirect user to matches.tsx page
        if (response.success) {
            // Save username to sessionStorage upon successful login
            Cookies.set('token', "hi");
            console.log("response", response);
            window.sessionStorage.setItem('username', user.username);

            Router.push('/matches');
        } else {
            alert(response.error);
        }
    }

    // Event handler for LoginFields, called when contents of Input are changed
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
  
  return (
    <div className="p-4 bg-slate-800">
        {signup && <TextInput fieldName="Your Name" inputName="name" onChange={handleInputChange}></TextInput>}
        <TextInput fieldName="Username" inputName="username" onChange={handleInputChange}></TextInput>
        <TextInput fieldName="Password" inputName="password" onChange={handleInputChange}></TextInput>


        {!signup && 
        <div className="w-full ">
            <button className="w-1/2 bg-slate-700 hover:bg-slate-500 rounded-sm p-1 "
            onClick={handleClick}>Log In</button>
            <Link href={"/signup"}>
                <button className="w-1/2 bg-blue-900 hover:bg-slate-500 rounded-sm p-1">Sign Up</button>
            </Link>
            <OAuth></OAuth>


        </div>
        
        }
        {signup && 
        <div className="w-full ">
            <button className="w-1/2 bg-slate-700 hover:bg-slate-500 rounded-sm p-1 "
            onClick={handleClick}>Sign Up</button>
            <Link href={"/login"}>
                <button className="w-1/2 bg-blue-900 hover:bg-slate-500 rounded-sm p-1">Log In</button>
            </Link>
        </div>}
        
    </div>
  );
}
