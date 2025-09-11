import React from 'react'

const Category = () => {
  return (
    <div>
      <div className="inline-flex w-screen justify-evenly lg:justify-center py-1 text-white gap-1 lg:gap-2 items-center">
  <button
    className="rounded-l-sm border text-sm lg:text-lg bg-slate-500 text-white border-gray-200 px-1 lg:px-3 py-1 lg:py-1 font-normal cursor-pointer gap-2 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
  >
    View
  </button>
 
  <button
    className="-ml-px border text-sm lg:text-lg bg-slate-500 text-white border-gray-200 px-1 lg:px-3 py-1 lg:py-1 font-normal cursor-pointer gap-2 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
  >
    Edit
  </button>

  <button
    className="-ml-px rounded-r-sm text-sm lg:text-lg border bg-slate-500 text-white border-gray-200 px-1 lg:px-3 py-1 lg:py-1 font-normal cursor-pointer gap-2 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
  >
    Delete
  </button>

</div>
    </div>
  )
}

export default Category
