import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-[42px] font-semibold bg-gradient-to-r from-brandBlue via-brandOrange to-brandYellow bg-clip-text text-transparent">
          Powerful AI Tools
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with cutting-edge AI technology
        </p>
      </div>

      {/* Tools Grid */}
      <div className="flex flex-wrap mt-10 justify-center gap-6">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-8 max-w-xs rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:border-brandOrange/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => user && navigate(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl shadow-md"
              style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
            />
            <h3 className="mt-6 mb-3 text-lg font-semibold text-brandDark">
              {tool.title}
            </h3>
            <p className="text-gray-500 text-sm max-w-[95%]">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools
