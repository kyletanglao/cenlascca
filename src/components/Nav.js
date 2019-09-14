import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Guide"
            >
              Autocross Guide
            </Link>
          </li>        
          <li>
            <a href="http://cenla-scca.org/live/results_live.htm">
              Live Timing
            </a>
          </li>             
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Events"
            >
              Events
            </Link>
          </li>    
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Results"
            >
              Results 
            </Link>
          </li>            
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Calendar"
            >
              Calendar
            </Link>
          </li>   
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Contact"
            >
              Contact Us
            </Link>
          </li>                       
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
