import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_img_URL } from "../utils/const";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errmessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const pass = useRef(null);

  const toggleSigInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // validate the form data

    const message = checkValidData(email.current.value, pass.current.value);
    setErrMessage(message);
    // if error message is there just return the form
    if (message) return;

    if (!isSignIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign IN logic
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
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
