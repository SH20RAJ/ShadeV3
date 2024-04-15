import React from "react";

export default function Tags() {
  return (
    <div className="sticky top-0 bg-white z-10 pb-4">
      <div className="overflow-x-hidden relative">
        <div
          className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
          style={{ transform: "translateX(-800px)" }}
        >
          <button className="transition-colors bg-secondary-dark hover:bg-secondary-dark-hover text-secondary p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            All
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            JavaScript
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            TypeScript
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Programming
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Travelling
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Cricket World Cup 2023
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Bowling
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Cricket
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            React
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Next.js
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            UI/UX Design
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Object Oriented Programming
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Frontend Web Development
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Backend Web Development
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Web Development
          </button>
          <button className="transition-colors bg-secondary hover:bg-secondary-hover p-2 py-1 px-3 rounded-lg whitespace-nowrap">
            Coding
          </button>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <button className="transition-colors hover:bg-gray-100 rounded-full flex items-center justify-center h-full aspect-square w-auto p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <button className="transition-colors hover:bg-gray-100 rounded-full flex items-center justify-center h-full aspect-square w-auto p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
