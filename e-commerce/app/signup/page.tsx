"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "../sharedComponents/Input";
import Button from "../sharedComponents/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import TopBanner from "../sharedComponents/TopBanner";
import NavBar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
          <TopBanner />
      <NavBar />

    <div className="flex flex-col md:flex-row items-center md:items-start gap-40 py-12  ">
      <div className=" flex ">
        <Image
          src="/images/phone.png"
          alt="Cart and a smartphone"
          width={900}
          height={800}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center max-w-md w-full pt-20">
        <h1 className="text-4xl  mb-3 text-black">Create an account</h1>
        <p className="mb-7">Enter your details below</p>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"
        />
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
<Button
  variant="default"
  size="full"
  onClickHandler={() => {}}
  className="mb-6"
  buttonText={<a href="/home">Create Account</a>}
/>
<Button
  variant="google"
  size="full"
  className="flex items-center justify-center gap-2 mb-6"
  onClickHandler={() => {}}
  buttonText={
    <>
      <FcGoogle className="text-lg" /> Sign up with Google
    </>
  }
/>


        <p className="text-sm text-gray-600 text-center">
          Already have account?{" "}
         <Link href={"/signin"} className="underline font-medium">Log In</Link>

        </p>
      </div>

    </div>
          <Footer />
        </>
  );
};
export default SignUpForm;
