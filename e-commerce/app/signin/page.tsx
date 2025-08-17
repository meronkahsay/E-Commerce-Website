"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "../sharedComponents/Input";
import Button from "../sharedComponents/Button";
import Link from "next/link";
import TopBanner from "../sharedComponents/TopBanner";
import NavBar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
const SignInForm = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
     <TopBanner />
    <NavBar/>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-40 py-12  ">
      <div className=" flex ">
        <Image
          src="/images/phone.png"
          alt="Cart and a smartphone"
          width={900}
          height={900}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center max-w-md w-full py-30">
        <h1 className="text-4xl mb-3 text-black">Log in to Exclusive</h1>
        <p className="mb-7">Enter your details below</p>
        <Input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or Phone Number"
          className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"
        />
        <div className="flex items-center gap-40">
<Link href="/home" >
    <Button
      variant="default"
      size="short"
      onClickHandler={() => {}}
      className="mb-4"
      buttonText="Log in"
    />
</Link>
        <p className="text-sm text-pink-700 ">
           <Link href={"/signup"} className="font-medium">Forgot your password?</Link>
        </p>
        </div>
      </div>
    </div>
    <Footer/>
       </>
  );
};
export default SignInForm;
