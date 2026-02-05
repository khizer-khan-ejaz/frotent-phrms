import React, { useState } from 'react';

const ResponsiveMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="wrapper">
      <nav id="main-nav" className={isMenuOpen ? 'open' : ''}>
        <ul className="first-nav">
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
        </ul>
        <ul className="second-nav">
          <li>
            <a href="/about-us_d1">About GESTER</a>
            <ul className="nav_child">
              <li><a href="/vr_d48" title="GESTER 360° VR">GESTER 360° VR</a></li>
              <li><a href="/history_d25" title="History">History</a></li>
              <li><a href="/company-tour-_d19" title="Company tour">Company tour</a></li>
              <li><a href="/service_d22" title="Service">Service</a></li>
              <li><a href="/certificates_d28" title="Certificates">Certificates</a></li>
            </ul>
          </li>
          <li>
            <a href="/products">Products</a>
            <ul className="nav_child">
              <li>
                <a href="/textile-testing-equipment_c1">Textile Testing Equipment</a>
                <ul>
                  <li><a href="/fabric-textile-tester_c4">Fabric &amp; Textile Tester</a></li>
                  <li><a href="/color-fastness-tester_c14">Color Fastness Tester</a></li>
                  <li><a href="/universal-strength-tester_c50">Universal Strength Tester</a></li>
                  <li><a href="/yarn-tester-fiber-tester_c2">Yarn Tester &amp; Fiber Tester</a></li>
                  <li><a href="/lab-dyeing-finishing-machine_c48">Lab Dyeing &amp; Finishing Machine</a></li>
                  <li><a href="/geotextile-tester_c49">Geotextile Tester</a></li>
                  <li><a href="/nonwovens-tester_c56">Nonwovens Tester</a></li>
                </ul>
              </li>
              {/* Add more list items similarly... */}
            </ul>
          </li>
          {/* Add more primary list items similarly... */}
        </ul>
      </nav>
      <button className="toggle hc-nav-1" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default ResponsiveMenu;
