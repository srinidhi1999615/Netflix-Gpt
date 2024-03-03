import React, { useState } from "react";
import Header from "./Header";

const Signin = () => {
  const[signInForm,setSignInFrom]=useState(true);
  const handleSignInForm=()=>{
   setSignInFrom(!signInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className=" w-3/12 h-auto absolute p-12 bg-black bg-opacity-60 my-40 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-2 px-2">{signInForm ? "Sign In" : "Sign Up"}</h1>
        {!signInForm && <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-800"/>}
        <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-800"/>
        <input type="password" placeholder="Password"  className="p-2 m-2 w-full bg-gray-800"/>
        <button type="submit" className="p-4 m-2 bg-red-700 w-full  text-black" >{signInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-2 m-2 cursor-pointer" onClick={handleSignInForm}>{signInForm ? " New to Netflix? Sign Up to Access... ": "Already a user?Sign In to Access..."}</p>
      </form>
    </div>
  );
};

export default Signin;
