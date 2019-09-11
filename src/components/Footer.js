import React from 'react';
import config from '../../config';
import SCCALogo from '../assets/img/SCCAlogotype_Negative.png';


export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        {/* <h2 className="major">Get in touch</h2>
        <p>
          Have a question or comment? Fill out the form below and we will get back to you as soon as we can.
        </p>
        <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="demo-category">Category</label>
              <select name="demo-category" id="demo-category">
                <option value="">-</option>
                <option value="1">First Timer</option>
                <option value="1">Event Critique</option>
                <option value="1">Suggestions</option>
                <option value="1">Comment</option>                    
              </select>
            </div>            
          <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          {/* <li className="fa-home">{config.address}</li>
          <li className="fa-phone">{config.phone}</li> */}


        <ul className="copyright">
          <li><a href="https://scca.org"><img class="footerLogo" src={SCCALogo}></img></a></li>
          <li>&copy; CENLA SCCA. All rights reserved.</li>
        </ul>
      </div>
    </section>
  );
}
