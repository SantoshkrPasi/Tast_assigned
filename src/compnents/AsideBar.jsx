import React from 'react'

const AsideBar = () => {
  return (
    <div className="bg-gray-800 w-64 min-h-screen">
      <div className="p-4">

        <div className=' m-2 p-2 flex justify-between items-center flex-col'>
          {/* Back button */}
          <a href="#" class="text-white border-2 border-gray-400 rounded-full p-1 self-end inline-flex items-center justify-center">
            {'<'}
          </a>


          {/* Catalix tab */}
          <a href="#" className="text-3xl text-white">Catalix</a>
        </div>

        {/* Tabs */}
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Activities</a>
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Analytics</a>
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Transformation</a>
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Library</a>
        </nav>

        {/* Horizontal Line */}
        <hr className="my-4 border-t border-gray-700" />

        {/* Settings and Logout */}
        <div>
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Settings</a>
          <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default AsideBar
