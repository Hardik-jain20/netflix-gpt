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

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
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
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 md:w-50 mx-auto md:mx-0" src={logo_URL} alt="logo" />
      {/* When user is there at that time only sign out button will show */}
      {user && (
        <div className="flex items-center justify-between md:justify-center md:p-2 md:pt-0">
          {showGPTSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-4 rounded-lg cursor-pointer"
              onChange={handleLangChange}
              value={lang}
            >
              {Supported_Language.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-2 m-4 text-white bg-red-600 rounded-lg cursor-pointer transition-all hover:bg-red-700"
            onClick={handleGPTSearchClick}
          >
            {!showGPTSearch ? "GPT Search" : "HomePage"}
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 p-2 m-4 text-lg text-white cursor-pointer rounded-lg transition-all hover:text-gray-300"
          >
            <SignOutIcon size={22} />
            <span className="whitespace-nowrap">Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
