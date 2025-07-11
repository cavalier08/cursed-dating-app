'use client'

import '../app/globals.css';
import Footer from "@/components/footer"
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="place-items-center grid h-screen">
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl">the-cursed-dating-app</h1>
      </div>
      <LoginForm signup={false}></LoginForm>
      <Footer></Footer>
    </div>
  );
}
