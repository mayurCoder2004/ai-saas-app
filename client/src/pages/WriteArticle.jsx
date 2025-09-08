import React from 'react'
import { Sparkles } from 'lucide-react'

const WriteArticle = () => {
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* Left Col */}
      <form className='w-full max-w-lg bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Article Configuration</h1>
        </div>
      </form>
      {/* Right Col */}
      <div>

      </div>
    </div>
  )
}

export default WriteArticle