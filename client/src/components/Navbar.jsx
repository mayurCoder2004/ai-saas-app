import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-50 w-full flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 
      bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 shadow-md backdrop-blur">
      
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer drop-shadow-md"
      />

      {/* User Section */}
      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer 
          bg-gradient-to-r from-brandBlue via-brandOrange to-brandYellow text-white font-medium 
          px-10 py-2.5 shadow-md hover:opacity-90 transition"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
