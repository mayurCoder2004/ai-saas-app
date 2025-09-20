import { FileText, Sparkles } from 'lucide-react';
import React, { useState } from 'react'
import axios from "axios";
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ReviewResume = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();
    
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", input);

      const { data } = await axios.post(
        "/api/ai/resume-review",
        formData,
        { headers: { Authorization: `Bearer ${await getToken()}` } }
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
            Resume Review
          </h1>
        </div>

        {/* Topic */}
        <p className="mt-6 text-sm font-medium text-gray-700">Upload Resume</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept='application/pdf'
          className="w-full p-3 mt-2 outline-none text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD033]/50 focus:border-[#FFD033] transition"
          required
        />

        <p className='text-xs text-gray-500 font-light mt-1'>Supports PDF resume only</p>

        {/* Button */}
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#FF8000] to-[#6A5ACD] text-white px-4 py-3 mt-8 text-sm font-medium rounded-lg cursor-pointer shadow-md hover:shadow-lg hover:opacity-95 transition">
          {
            loading ? <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
            :
            <FileText className="w-5" />
          }
           Review Resume
        </button>
      </form>

      {/* Right Col */}
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[380px] max-h-[600px] transition hover:shadow-xl flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-5 h-5 text-[#FFD033]" />
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#FF8000] via-[#FFD033] to-[#6A5ACD] bg-clip-text text-transparent">
            Analysis Results
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-4 text-gray-400">
            <FileText className="w-10 h-10 text-[#0066FF]" />
            <p>Upload a resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume