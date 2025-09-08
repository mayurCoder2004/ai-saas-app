import React, { useState } from "react";

const CreationItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition duration-200">
      <div className="flex justify-between items-center gap-4">
        {/* Prompt + Info */}
        <div>
          <h2 className="font-medium text-[#1E1E2E]">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} – {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Type Badge */}
        <button
          className="px-4 py-1 rounded-full text-xs font-medium text-white shadow-sm"
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
    </div>
  );
};

export default CreationItem;
