
'use client'

import { ContextMenu, ContextMenuTrigger } from '@radix-ui/react-context-menu';
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react';


export default function Sidebar({active}) {
  const [sidebar,setSidebar] = useState(1)

  active = (usePathname()).substring(1);
  return (
    <>
      <div className="app-sidebar" style={{display : (sidebar?"block":"none")}}>
      <Link href={"/"} className={"app-sidebar-link " + (active === "" ? "active" : "")}>
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
            className="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>
        <Link href={"/videos"}  className={"app-sidebar-link " + (active === "videos" ? "active" : "")}>
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
            className="feather feather-play-circle"
          >
            <circle cx={12} cy={12} r={10} />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        </Link>
        <Link href={"/Chirp"}  className={"app-sidebar-link " + (active === "text" ? "active" : "")}>
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1={16} y1={8} x2={2} y2={22} /><line x1="17.5" y1={15} x2={9} y2={15} /></svg>
        </Link>
        
        <Link href={"/visuals"}  className={"app-sidebar-link " + (active === "images" ? "active" : "")}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture">
  <circle cx={12} cy={12} r={10} />
  <line x1="14.31" y1={8} x2="20.05" y2="17.94" />
  <line x1="9.69" y1={8} x2="21.17" y2={8} />
  <line x1="7.38" y1={12} x2="13.12" y2="2.06" />
  <line x1="9.69" y1={16} x2="3.95" y2="6.06" />
  <line x1="14.31" y1={16} x2="2.83" y2={16} />
  <line x1="16.62" y1={12} x2="10.88" y2="21.94" />
</svg>

        </Link>

        <Link href={"/articles"}  className={"app-sidebar-link " + (active === "articles" ? "active" : "")}>
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
            className="feather feather-book-open"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </Link>
        <Link href={"/explore"}  className={"app-sidebar-link " + (active === "explore" ? "active" : "")}>
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
            className="feather feather-calendar"
          >
            <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
            <line x1={16} y1={2} x2={16} y2={6} />
            <line x1={8} y1={2} x2={8} y2={6} />
            <line x1={3} y1={10} x2={21} y2={10} />
          </svg>
        </Link>
        <Link href={"/test"}  className={"app-sidebar-link " + (active === "test" ? "active" : "")}>
          <svg
            className="link-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <defs />
            <circle cx={12} cy={12} r={3} />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </Link>

        <Link href={"/logout"}  className={"app-sidebar-link " + (active === "logout" ? "active" : "")}>
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
            className="feather feather-log-out link-icon"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1={21} y1={12} x2={9} y2={12} />
          </svg>
        </Link>

      </div>
        <div className="sidebar-toggler absolute top-0 left-0 z-40 h-12 w-12  ml-4 flex text-lg  cursor-pointer p-4 rounded-full" onClick={()=> setSidebar(!sidebar)}>
    </div>
    </>
  );
}
