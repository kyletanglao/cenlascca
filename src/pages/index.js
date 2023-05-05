import React from 'react';
import config from '../../config';

import Layout from '../components/Layout';
import camaro from '../assets/images/camaro.jpg';
import Zcar from '../assets/images/240.jpg';
import glory from '../assets/images/glory.jpg';
import logoRed from '../assets/images/LogoSmall.png';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner logoTop">
        <div className="logo">
          <img src={logoRed} alt=""></img>
        </div>
        <div className="bannerText">
          <h2 class="headliner">Your car was meant for more than just coffee meets. It's time to drive it.</h2>
          {/* <p>{config.subHeading}</p> */} <br></br>
          <a href={config.nextEventLink} target="_blank" rel="noopener noreferrer" className="calltoaction button primary fit">Register for {config.nextEventDate}</a>
					<ul className="actions grid navGrid">
            <li><a href="http://swamp.gotdns.com:5555/LiveTiming/cenla/results_live.htm" target="_blank" rel="noopener noreferrer" className="button button-light liveTimingButton">Live timing</a></li>     
            <li><a href="/Results" className="button button-light">Results</a></li>
            <li><a href="/Calendar" className="button button-light">Calendar</a></li>
            <li><a href="/Guide" className="button button-light">Guide</a></li>
            <li><a href="/Spectate" className="button button-light">Spectate</a></li>      
            <li><a href="/Downloads" className="button button-light">Downloads</a></li> 
            <li><a href="/Contact" className="button button-light">Contact Us</a></li>
      		</ul>
        </div>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="image">
            <img src={camaro} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Compete with your car in a safe environment</h2>
            <p>
            “Solo®” is the brand name for SCCA® Autocrossing and on paper it seems very simple – use traffic cones to make a mini-roadcourse in a large parking lot or unused airport tarmac and see who can drive it the quickest without hitting any cones or going off course.
            </p>
            <a href="/Guide" className="special">
              Read our autocross guide
            </a>            
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <div className="image">
            <img src={Zcar} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Motorsport has never been so affordable</h2>
            <ul class="alt">
              <li>Member Event: $35</li>
              <li>JESTC EVOC Event: $50</li>
              <li>Member Event Double Runs: $70</li>
              <li>Non-member Event: $45</li>
              <li>Non-member EVOC Event: $60</li>
              <li>Penalty for On-Site Registration: $10</li>
            </ul>
            <a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noreferrer" className="special">
              Find the next event
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <div className="image">
            <img src={glory} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Find your glory</h2>
            <p>
            SCCA autocross events can be found all over the country. Many of our drivers go beyond the local level and challenge other regions or even compete at National SCCA events.
            </p>
            <a href="/Calendar" className="special">
              See the calendar
            </a>
          </div>
        </div>
      </section>

    </section>
  </Layout>
);

export default IndexPage;
