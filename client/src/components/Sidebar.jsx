import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-12 h-12 rounded-full mx-auto border-2 border-[#FF8000]"
        />
        <h1 className="mt-2 text-center text-sm font-semibold text-[#1E1E2E]">
          {user.fullName}
        </h1>

        {/* Nav Links */}
        <div className="px-6 mt-6 text-sm font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 mb-2 flex items-center gap-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#0066FF] to-[#6A5ACD] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#FFF7E6] hover:text-[#0066FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-gray-600"
                    }`}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={user.imageUrl}
            alt=""
            className="w-8 h-8 rounded-full border border-[#FFD033]"
          />
          <div>
            <h1 className="text-sm font-medium text-[#1E1E2E]">
              {user.fullName}
            </h1>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>{" "}
              Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-[#FF8000] transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
