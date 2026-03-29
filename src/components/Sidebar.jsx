const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" stroke="#4f9cf9" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 16h.01M12 16h.01M16 16h.01M8 20h.01M12 20h.01M16 20h.01" stroke="#4f9cf9" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
    <nav className="sidebar-nav">
      <button className="nav-btn active" title="Weather">
        <span className="nav-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            <circle cx="12" cy="12" r="5" />
          </svg>
        </span>
        <span className="nav-label">Weather</span>
      </button>
    </nav>
  </aside>
);

export default Sidebar;