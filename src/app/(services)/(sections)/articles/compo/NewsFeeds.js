import React from "react";

export default function NewsFeeds() {
  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto p-4">
          {/* <h1 className="text-5xl font-extrabold mb-4 text-center text-indigo-700">
            Tailwind CSS news feed #1
          </h1> */}
          <div className="flex flex-col md:flex-row -mx-1.5 p-4">
            <a
              href="#"
              className="h-72 md:h-auto w-full md:w-7/12 mx-1.5 mb-6 md:mb-0 group"
            >
              <div className="h-72 md:h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80"
                  className="absolute z-0 object-cover w-full h-72 md:h-full rounded-md"
                />
                <div className="absolute gradient w-full h-72 md:h-full rounded-md z-10" />
                <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
                  <h1 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline_ text-2xl md:text-3xl">
                    Will printable solar cells reshape buildings?
                  </h1>
                  <div className="text-xs text-white hidden sm:block">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="clock"
                        className="h-3 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        />
                      </svg>
                      <span className="text-xs text-white">
                        18h | Stephen Ainsworth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div className="w-full md:w-5/12 mx-1.5">
              <a
                href="#"
                className="flex items-center group mb-3 pb-3 border-b 	"
              >
                <img
                  src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80"
                  className="rounded-md object-cover mr-3 h-24 w-24"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-2">
                    Facebook and Instagram encryption plans delayed by Meta
                    until 2023
                  </h2>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      className="h-3 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      />
                    </svg>
                    <span className="text-xs">1h | Stephen Ainsworth</span>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center group mb-3 pb-3 border-b"
              >
                <img
                  src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80"
                  className="rounded-md object-cover mr-3 h-24 w-24"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-2">
                    El Salvador Bitcoin city planned at base of Conchagua
                    volcano
                  </h2>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      className="h-3 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      />
                    </svg>
                    <span className="text-xs">18h | Stephen Ainsworth</span>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center group mb-3 pb-3 border-b"
              >
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80"
                  className="rounded-md object-cover mr-3 h-24 w-24"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-2">
                    New homes in England to have electric car chargers by law
                  </h2>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      className="h-3 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      />
                    </svg>
                    <span className="text-xs">1d | Stephen Ainsworth</span>
                  </div>
                </div>
              </a>
              <a href="#" className="flex items-center group">
                <img
                  src="https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80"
                  className="rounded-md object-cover mr-3 h-24 w-24"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-2">
                    Six million routers had serious security flaw
                  </h2>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      className="h-3 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      />
                    </svg>
                    <span className="text-xs">12d | Stephen Ainsworth</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          Created by{" "}
          <a
            href="https://stephenainsworth.com"
            target="_blank"
            title="Stephen Ainsworth - Web Developer"
          >
            Stephen Ainsworth
          </a>
        </div>
      </div>
    </div>
  );
}
