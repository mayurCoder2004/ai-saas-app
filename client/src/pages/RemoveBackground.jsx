import { Eraser, Sparkles } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBackground = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", input);

      const { data } = await axios.post(
        "/api/ai/remove-image-background",
        formData,
        { headers: { Authorization: `Bearer ${await getToken()}` } } // also removed the extra ":" after Bearer
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-start gap-6 text-slate-700">
      {/* Left Col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition hover:shadow-xl"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#FF8000]" />
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#0066FF] via-[#FF8000] to-[#6A5ACD] bg-clip-text text-transparent">
            Background Removal
          </h1>
        </div>

        {/* Topic */}
        <p className="mt-6 text-sm font-medium text-gray-700">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-3 mt-2 outline-none text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD033]/50 focus:border-[#FFD033] transition"
          required
        />

        <p className="text-xs text-gray-500 font-light mt-1">
          Supports JPG, PNG, and other image formats
        </p>

        {/* Button */}
        <button
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 px-4 py-3 mt-8 text-sm font-medium rounded-lg shadow-md transition
    ${
      loading
        ? "bg-gray-400 text-gray-200 cursor-not-allowed opacity-70"
        : "bg-gradient-to-r from-[#0066FF] via-[#FF8000] to-[#6A5ACD] text-white cursor-pointer hover:shadow-lg hover:opacity-95"
    }`}
        >
          {loading ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Eraser className="w-5" />
          )}
          Remove Background
        </button>
      </form>

      {/* Right Col */}
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[380px] max-h-[600px] transition hover:shadow-xl flex flex-col">
        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-4 text-gray-400">
              <Eraser className="w-10 h-10 text-[#0066FF]" />
              <p>
                Upload an image and click "Remove Background" to get started
              </p>
            </div>
          </div>
        ) : (
          <img src={content} alt="image" className="mt-3 w-full h-full" />
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;
