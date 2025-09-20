import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  const LoadingSpinner = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full border-4 border-purple-200 border-t-transparent animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Loading Your Workspace
        </h2>
        <p className="text-slate-600">Setting up your creative environment...</p>
      </div>
    </div>
  );

  const SignInContainer = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Sign in to continue your creative journey with our AI-powered tools
          </p>
        </div>

        {/* Sign In Component Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8">
            <SignIn />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Creative Tools</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!user) {
    return <SignInContainer />;
  }

  return (
    <div className="flex flex-col items-start justify-start h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navbar */}
      <nav className="w-full px-4 sm:px-6 lg:px-8 min-h-16 flex items-center justify-between 
                     border-b border-white/20 bg-white/80 backdrop-blur-md shadow-lg relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl transform -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/20 to-orange-200/20 rounded-full blur-xl transform translate-x-12 -translate-y-12 animate-pulse delay-1000"></div>
        
        <div className="relative flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div 
              onClick={() => navigate("/")}
              className="group cursor-pointer p-2 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <img
                src={assets.logo}
                alt="AI Creative Suite"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain 
                         transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            
            {/* Brand Text - Hidden on mobile */}
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Studio
              </h1>
              <p className="text-xs text-slate-500">Creative Workspace</p>
            </div>
          </div>

          {/* User Info - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-700">
                Welcome back, {user?.firstName || 'Creative'}
              </p>
              <p className="text-xs text-slate-500">Ready to create something amazing?</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow-lg">
              {user?.firstName?.charAt(0) || user?.emailAddresses?.[0]?.emailAddress?.charAt(0) || 'U'}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebar(!sidebar)}
            className="sm:hidden p-2 rounded-xl bg-white/50 hover:bg-white/80 border border-white/30 
                     transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
          >
            {sidebar ? (
              <X className="w-5 h-5 text-slate-700 transition-transform duration-200" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700 transition-transform duration-200" />
            )}
          </button>
        </div>
      </nav>

      {/* Content Area */}
      <div className="flex-1 w-full flex h-[calc(100vh-64px)] relative">
        {/* Sidebar */}
        <div className={`transition-all duration-300 ease-in-out ${
          sidebar ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>

        {/* Mobile Overlay */}
        {sidebar && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 sm:hidden transition-opacity duration-300"
            onClick={() => setSidebar(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-slate-50/50 to-blue-50/50 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Content Container */}
          <div className="relative z-10 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;