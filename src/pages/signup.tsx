import Link from "next/link";
import '../app/globals.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

interface User {
    name: string,
    username: string,
    password: string
}

export default function Signup() {
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        password: ""
    });
    const Router = useRouter();

    // Event handler for signup button
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
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

        // Send POST request containing ranking to API
        const body = user;
        //postToDjango('', body);

        // If successful, redirect user to matches.tsx page
        Router.push('/matches');
    }

    // Event handler for InputFields
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        console.log(user);
    };

  return (
    <div className="place-items-center grid h-screen">
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl">Create an account</h1>
      </div>
      
      
      <div className="p-4 bg-slate-800">
        <InputField fieldName="Your Name" inputName="name" onChange={handleInputChange}></InputField>
        <InputField fieldName="Username" inputName="username" onChange={handleInputChange}></InputField>
        <InputField fieldName="Password" inputName="password" onChange={handleInputChange}></InputField>

        <div className="w-full ">
          <button className="w-1/2 bg-slate-700 hover:bg-slate-500 rounded-sm p-1" onClick={handleClick}>Sign Up</button>
        </div>
        
      </div>
    </div>
  );
}

function InputField({fieldName, inputName, onChange}:
    {fieldName: string, inputName: string, onChange: React.ChangeEventHandler}) {
  return(
    <div className=" mb-4">
      <label>{fieldName}:</label>
      <input className="text-gray-300 p-2 rounded-sm bg-slate-700 hover:bg-slate-600 w-full"
        type="text" name={inputName} onChange={onChange}></input>
    </div>
  );
}