import React, { useState } from 'react';
import Nav from './Nav';
import logoPlainRed from '../assets/img/logoPlainRed.png';


import { Link } from 'gatsby';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <div class="homeMenu">
          <img src={logoPlainRed} alt="" class="menuLogo"></img>
          <Link to="/">CENLA SCCA</Link>
          </div>
        </h1>

        <nav>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
