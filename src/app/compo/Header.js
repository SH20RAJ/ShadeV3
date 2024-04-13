import Link from "next/link"
import { getUserSession } from "../../lib/sessions";
let user = await getUserSession()
let Header = async () => {

  return(
          <>
<div className="app-header">
  <div className="app-header-left">
    <span className="app-icon" />
    <p className="app-name"><Link href={"/"}>Shades</Link></p>
    <div className="search-wrapper">
      <input className="search-input" type="text" placeholder="Search" />
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-search" viewBox="0 0 24 24">
        <defs />
        <circle cx={11} cy={11} r={8} />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    </div>
  </div>
  <div className="app-header-right">
    <button className="mode-switch" title="Switch Theme">
      <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} width={24} height={24} viewBox="0 0 24 24">
        <defs />
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
    <button className="add-btn" title="Add New Project">
      <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <line x1={12} y1={5} x2={12} y2={19} />
        <line x1={5} y1={12} x2={19} y2={12} /></svg>
    </button>
    <button className="notification-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
    </button>
  <Link href={"/api/auth/signin"}>
    <button className="profile-btn">
      <img src={user?.image} />
      <span>{user?.name}</span>
    </button>
    </Link>
  </div>
  <button className="messages-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  </button>
</div>

          
          
          

          </>

    )

}

export default Header;