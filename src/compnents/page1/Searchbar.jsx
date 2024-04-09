import React from 'react'
import bellImage from './asset/bell.png';
import Chat from './asset/messenger.png';
import Setting from './asset/gear.png';


const Searchbar = () => {
    return (

        <div className=' h-full flex justify-between m-10 '>
        <div id='search' className='w-2/4'>
            <div className="flex items-center border border-red-400 rounded-md px-4">
                <span className="text-gray-600">&#128269;</span>
                <input type="text" className="flex-1 px-2 py-2 placeholder-gray-500 placeholder-opacity-75 focus:outline-none" placeholder="by profile, setting, artifact, etc..." />
                <span className="text-gray-600 px-1 border border-gray-400 rounded-full">&#10005;</span>
            </div>
        </div>
        <div id='nav_options' className=' flex gap-3'>
            <img src={bellImage} alt="Bell" className='h-10 m-2 rounded-md shadow-custom '/>
            <img src={Chat} alt="chat" className='h-10 m-2 rounded-md shadow-custom'/>
            <img src={Setting} alt="setting" className='h-10 m-2 rounded-md shadow-custom'/>
            <img src={Setting} alt="" className='h-14 m-2 rounded-md'/>            
        </div>

        </div>




       
    )
}

export default Searchbar
