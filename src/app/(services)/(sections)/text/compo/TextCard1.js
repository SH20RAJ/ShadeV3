import React from 'react'

export default function TextCard1() {
  return (
    <>
        <div className="textd shadow-md rounded-lg p-4 w-full">
        {/* Profile Section */}
        <div className="flex items-center mb-4">
            <img src="/image.png" alt="Profile" className="w-10 h-10 rounded-full mr-2 object-cover" />
            <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-gray-600">@johndoe</p>
            </div>
        </div>
        {/* Tweet Content */}
        <p className="text--800 mb-4 texed">This is the tweet content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* Interaction Buttons */}
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
            {/* Like Button */}
            <button className="flex items-center space-x-1 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>10</span>
            </button>
            {/* Dislike Button */}
            <button className="flex items-center space-x-1 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>5</span>
            </button>
            {/* Comment Button */}
            <button className="flex items-center space-x-1 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>20</span>
            </button>
            </div>
            {/* Reply Button */}
            <div>
            <button className="flex items-center space-x-1 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Reply</span>
            </button>
            </div>
        </div>
        </div>


    </>
  )
}
