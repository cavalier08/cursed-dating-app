'use client'

import Link from "next/link";
import '../app/globals.css';
import Footer from "@/components/footer"
import TextInput from "@/components/TextInput";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { postToDjango } from "@/services/api";

interface User {
    username: string,
    password: string
}

export interface LoginResponse {  // API body response for /login must follow this format!
  success: boolean,
  error?: string
}

export default function Login() {
    const [user, setUser] = useState<User>({
        username: "",
        password: ""
    });
    const Router = useRouter();

    // Event handler for LoginButton, called upon login
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
      // Send POST request containing username / password to API
      //const response: LoginResponse = await postToDjango('/login', user);
      const response: LoginResponse = {success: true};   // API has not been set up yet!

      // If successful, redirect user to matches.tsx page
      if (response.success) {
        // Save username to sessionStorage upon successful login
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
    <div className="place-items-center grid h-screen">
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl">the-cursed-dating-app</h1>
      </div>
      
      
      <div className="p-4 bg-slate-800">
        <TextInput fieldName="Username" inputName="username" onChange={handleInputChange}></TextInput>
        <TextInput fieldName="Password" inputName="username" onChange={handleInputChange}></TextInput>

        <div className="w-full ">
          <button className="w-1/2 bg-slate-700 hover:bg-slate-500 rounded-sm p-1 "
            onClick={handleClick}>Log In</button>
          <Link 
              href={"/signup"}>
              <button className="w-1/2 bg-blue-900 hover:bg-slate-500 rounded-sm p-1">Sign Up</button>
          </Link>
        </div>
        
      </div>
        <Footer></Footer>
    </div>
  );
}
