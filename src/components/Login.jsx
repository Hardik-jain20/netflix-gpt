import React, { useRef, useState } from "react";
import Header from "./Header";
import { logo_URL } from "../utils/logo_URL";
import { bg_img_URL } from "../utils/bg_img_URL";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errmessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const pass = useRef(null);

  const toggleSigInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // validate the form data

    //console.log(email.current.value);
    //console.log(pass.current.value);

    const message = checkValidData(email.current.value, pass.current.value);
    setErrMessage(message);
    //console.log(message)
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bg_img_URL} alt="Background Image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-800"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={pass}
          className="p-4 my-4 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-bold text-lg p-2">{errmessage}</p>
        <button
          //To prevent submitting the form
          className="p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSigInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
