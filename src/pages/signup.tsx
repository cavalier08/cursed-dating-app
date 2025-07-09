import '../app/globals.css';
import Link from "next/link";
import TextInput from "@/components/TextInput";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { postToDjango } from "@/services/api";

interface User {
    name: string,
    username: string,
    password: string
}
import { LoginResponse } from '@/pages/login';

export default function Signup() {
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        password: ""
    });
    const Router = useRouter();

    // Event handler for signup button
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
        // Ensure all fields are present
        if (user.name == "") {
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
      //const response: LoginResponse = await postToDjango('/signup', user);
      const response: LoginResponse = {success: true};   // API has not been set up yet!

        // If successful, redirect user to matches.tsx page
        if (response.success) {
            // Save username to sessionStorage upon successful login
            window.sessionStorage.setItem('username', user.username);
            Router.push('/matches');
        } else {
            alert(response.error);
        }

        // If successful, redirect user to matches.tsx page
        Router.push('/matches');
    }

    // Event handler for InputFields
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

  return (
    <div className="place-items-center grid h-screen">
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl">Create an account</h1>
      </div>
      
      
      <div className="p-4 bg-slate-800">
        <TextInput fieldName="Your Name" inputName="name" onChange={handleInputChange}></TextInput>
        <TextInput fieldName="Username" inputName="username" onChange={handleInputChange}></TextInput>
        <TextInput fieldName="Password" inputName="password" onChange={handleInputChange}></TextInput>

        <div className="w-full ">
            <button className="w-1/2 bg-blue-900 hover:bg-slate-500 rounded-sm p-1"
                onClick={handleClick}>Sign Up</button>
            <Link 
                href={"/"}>
                <button className="w-1/2 bg-slate-700 hover:bg-slate-500 rounded-sm p-1">Log In</button>
            </Link>
        </div>
        
      </div>
    </div>
  );
}
