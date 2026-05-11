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
        <a href={siteData.phoneHref} aria-label="Call Advocate" title="Call Advocate">
          <span aria-hidden="true">📞</span>
        </a>
        <a href={siteData.whatsappHref} target="_blank" rel="noreferrer">
          <span aria-hidden="true">💬</span>
        </a>
      </div>
    </div>
  );
}
