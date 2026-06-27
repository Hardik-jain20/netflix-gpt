import React, { useEffect } from "react";
import { logo_URL, Supported_Language } from "../utils/const";
import { SignOutIcon } from "@primer/octicons-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const lang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView());
  };
  const handleLangChange = (e) => {
    // Changes the language
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribes when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-50" src={logo_URL} alt="logo" />
      {/* When user is there at that time only sign out button will show */}
      {user && (
        <div className="flex p-2 justify-center cursor-pointer">
          <select
            className="p-2 bg-gray-900 text-white m-4 rounded-lg cursor-pointer "
            onChange={handleLangChange}
          >
            {Supported_Language.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="p-2 m-4 text-white bg-red-600 rounded-lg cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            GPT Search
          </button>
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
