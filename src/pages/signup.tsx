import '../app/globals.css';
import Footer from "@/components/footer"
import LoginForm from "@/components/LoginForm";

export default function Signup() {
  return (
    <div className="place-items-center grid h-screen">
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl">the-cursed-dating-app</h1>
      </div>
      <LoginForm signup={true}></LoginForm>
      <Footer></Footer>
    </div>
  );
}
