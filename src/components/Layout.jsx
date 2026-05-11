import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { siteData } from "../data/siteData";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/process", label: "Law Classes" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`app-shell${menuOpen ? " menu-open" : ""}`}>
      <div className="page-glow page-glow-left"></div>
      <div className="page-glow page-glow-right"></div>

      <div className="site-shell">
        <header className="topbar">
          <div className="topbar-head">
            <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
              <span className="brand-mark">AD</span>
              <span className="brand-text">
                <strong>{siteData.advocateName}</strong>
                <span>{siteData.title}</span>
              </span>
            </NavLink>

            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-label="Open navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              className="button button-secondary nav-drawer-cta"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </NavLink>
          </nav>
        </header>

        <Outlet />
      </div>

      <div className="floating-bar">
        <a
          className="floating-action floating-action-call"
          href={siteData.phoneHref}
          aria-label="Call Advocate"
          title="Call Advocate"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            <path d="M6.6 3.8c.4-.4 1-.6 1.6-.4l2.1.7c.7.2 1.1.9 1 1.6l-.3 2.3c0 .4.1.8.4 1.1l3.6 3.6c.3.3.7.5 1.1.4l2.3-.3c.7-.1 1.4.3 1.6 1l.7 2.1c.2.6 0 1.2-.4 1.6l-1 1c-.9.9-2.3 1.3-3.6.9-2.2-.6-5.4-2.2-8.1-4.9S4 9.4 3.4 7.2C3 5.9 3.4 4.5 4.3 3.6l1-1Z" />
          </svg>
        </a>
        <a
          className="floating-action floating-action-whatsapp"
          href={siteData.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2l-1 4 4.1-1A8.8 8.8 0 1 0 12 3.2Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            <path
              d="M9.3 8.8c.2-.4.4-.4.7-.4h.6c.2 0 .4 0 .6.5l.8 1.8c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .5.5.9 1.3 1.7 2.2 2.2.2.1.4.1.5 0l.6-.4c.2-.1.4-.1.6 0l1.8.8c.4.2.5.4.5.6v.6c0 .3-.1.5-.4.7-.4.3-1 .5-1.8.4-1-.1-2.3-.6-3.8-2.1-1.5-1.5-2-2.8-2.1-3.8-.1-.8.1-1.4.4-1.8Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
