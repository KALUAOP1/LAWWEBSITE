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
          <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">AS</span>
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
          </nav>

          <NavLink className="button button-nav" to="/contact" onClick={() => setMenuOpen(false)}>
            Book Now
          </NavLink>
        </header>

        <Outlet />
      </div>

      <div className="floating-bar">
        <a href={siteData.phoneHref}>Call Advocate</a>
        <a href={siteData.whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <NavLink to="/contact">Book Consultation</NavLink>
      </div>
    </div>
  );
}
