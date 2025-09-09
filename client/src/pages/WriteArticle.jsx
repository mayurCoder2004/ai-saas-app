import React, { useState } from "react";
import { Edit, Sparkles } from "lucide-react";

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
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
            Article Configuration
          </h1>
        </div>

        {/* Topic */}
        <p className="mt-6 text-sm font-medium text-gray-700">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-3 mt-2 outline-none text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD033]/50 focus:border-[#FFD033] transition"
          placeholder="The future of artificial intelligence is..."
          required
        />

        {/* Length */}
        <p className="mt-6 text-sm font-medium text-gray-700">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-2 border rounded-full cursor-pointer transition-all duration-200 ${
                selectedLength.text === item.text
                  ? "bg-gradient-to-r from-[#FF8000] to-[#FFD033] text-white border-transparent shadow-md"
                  : "text-gray-500 border-gray-300 hover:border-[#6A5ACD] hover:text-[#6A5ACD]"
              }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#FF8000] to-[#6A5ACD] text-white px-4 py-3 mt-8 text-sm font-medium rounded-lg cursor-pointer shadow-md hover:shadow-lg hover:opacity-95 transition">
          <Edit className="w-5" /> Generate Article
        </button>
      </form>

      {/* Right Col */}
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[380px] max-h-[600px] transition hover:shadow-xl flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <Edit className="w-5 h-5 text-[#FFD033]" />
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#FF8000] via-[#FFD033] to-[#6A5ACD] bg-clip-text text-transparent">
            Generated Article
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-4 text-gray-400">
            <Edit className="w-10 h-10 text-[#0066FF]" />
            <p>Enter a topic and click "Generate Article" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
