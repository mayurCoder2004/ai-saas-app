import React, { useState } from "react";
import Markdown from "react-markdown";

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 w-full max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition duration-200"
    >
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        {/* Prompt + Info */}
        <div className="flex-1">
          <h2 className="font-medium text-[#1E1E2E] break-words">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} – {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Type Badge */}
        <button
          className="px-4 py-1 rounded-full text-xs font-medium text-white shadow-sm whitespace-nowrap"
          style={{
            background:
              item.type === "Image"
                ? "linear-gradient(to right, #0066FF, #6A5ACD)" // Blue → Purple
                : item.type === "Article"
                ? "linear-gradient(to right, #FF8000, #FFD033)" // Orange → Yellow
                : "linear-gradient(to right, #6A5ACD, #FFD033)", // Purple → Yellow fallback
          }}
        >
          {item.type}
        </button>
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="mt-4 w-full">
          {item.type.toLowerCase() === "image" ? (
            <div className="flex justify-center">
              <img
                src={item.content}
                alt="Generated"
                className="w-full max-w-md rounded-lg object-contain"
              />
            </div>
          ) : (
            <div className="mt-2 text-sm text-slate-700 max-h-80 overflow-y-auto">
              <div className="reset-tw prose prose-sm max-w-none">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
