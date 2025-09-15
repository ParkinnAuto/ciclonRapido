import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="menu-header">
        <div className="container">
          <nav className="menu-nav">
            {/* Logo */}
            <div className="menu-logo">
              <a href="/" className="logo-link">
                <img 
                  src="/ourHistory/ourHistory2.png" 
                  alt="Ciclón Rápido Logo" 
                  className="logo-img"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iIzBENkVGRCIvPgo8cGF0aCBkPSJNMTUgMTVIMzVWMzVIMTVWMTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAgMjBIMzBWMzBIMjBWMjBaIiBmaWxsPSIjMEQ2RUZEIi8+Cjwvc3ZnPgo=';
                  }}
                />
                <span className="logo-text">CICLÓN RÁPIDO</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="menu-list desktop-menu">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  HOME
                </a>
              </li>

              <li className="menu-item has-submenu">
                <a href="/Drivers" className="menu-link">
                  OUR TEAM
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/Drivers" className="submenu-link">
                      Drivers
                    </a>
                  </li>
                  <li>
                    <a href="/Cars" className="submenu-link">
                      Cars
                    </a>
                  </li>
                  <li>
                    <a href="/Archievement" className="submenu-link">
                      Achievement
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <a href="/Gallery" className="menu-link">
                  GALLERY
                </a>
              </li>

              <li className="menu-item has-submenu">
                <a href="/CarDesign" className="menu-link">
                  DESIGN
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/CarDesign" className="submenu-link">
                      Cars Design
                    </a>
                  </li>
                  <li>
                    <a href="/Stationery" className="submenu-link">
                      Stationery
                    </a>
                  </li>
                  <li>
                    <a href="/Dress" className="submenu-link">
                      Dress
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item has-submenu">
                <a href="/ourHistory" className="menu-link">
                  ABOUT US
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/ourHistory" className="submenu-link">
                      Our History
                    </a>
                  </li>
                  <li>
                    <a href="/ourPartners" className="submenu-link">
                      Our Partners
                    </a>
                  </li>
                  <li>
                    <a href="/ContactUs" className="submenu-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${mobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${mobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${mobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <a href="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                  HOME
                </a>
              </li>

              <li className="mobile-menu-item">
                <a href="/Drivers" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                  OUR TEAM
                </a>
                <ul className="mobile-submenu">
                  <li>
                    <a href="/Drivers" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Drivers
                    </a>
                  </li>
                  <li>
                    <a href="/Cars" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Cars
                    </a>
                  </li>
                  <li>
                    <a href="/Archievement" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Achievement
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mobile-menu-item">
                <a href="/Gallery" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                  GALLERY
                </a>
              </li>

              <li className="mobile-menu-item">
                <a href="/CarDesign" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                  DESIGN
                </a>
                <ul className="mobile-submenu">
                  <li>
                    <a href="/CarDesign" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Cars Design
                    </a>
                  </li>
                  <li>
                    <a href="/Stationery" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Stationery
                    </a>
                  </li>
                  <li>
                    <a href="/Dress" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Dress
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mobile-menu-item">
                <a href="/ourHistory" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT US
                </a>
                <ul className="mobile-submenu">
                  <li>
                    <a href="/ourHistory" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Our History
                    </a>
                  </li>
                  <li>
                    <a href="/ourPartners" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Our Partners
                    </a>
                  </li>
                  <li>
                    <a href="/ContactUs" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;