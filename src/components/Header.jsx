import React from "react";
import { logo_URL } from "../utils/const";
import { SignOutIcon } from "@primer/octicons-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-50" src={logo_URL} alt="logo" />
      {/* When user is there at that time only sign out button will show */}
      {user && (
        <div className="flex p-2 justify-center cursor-pointer">
          <SignOutIcon size={24} className="mt-5 text-white" />
          <button
            onClick={handleSignOut}
            className="text-lg text-white m-2 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
