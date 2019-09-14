import React from 'react';

import Layout from '../components/Layout';
import camaro from '../assets/images/camaro.jpg';
import Zcar from '../assets/images/240.jpg';
import glory from '../assets/images/glory.jpg';
import logoRed from '../assets/img/logoRed.png';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner logoTop">
        <div className="logo">
          <img src={logoRed} alt=""></img>
        </div>
        <div className="bannerText">
          <h2 class="headliner">Your car wasn't meant for coffee meets. It's time to drive it.</h2>
          {/* <p>{config.subHeading}</p> */} <br></br>
          <a href="/Guide" className="calltoaction button primary fit">Register for our Sept 22 Event</a>
					<ul className="actions grid navGrid">
            <li><a href="/Guide" className="button button-light">Autocross Guide</a></li>
            <li><a href="/#" className="button button-light">Live timing</a></li>
            <li><a href="/Results" className="button button-light">Results</a></li>
            <li><a href="/Events" className="button button-light">Events</a></li>
            <li><a href="/Calendar" className="button button-light">Calendar</a></li>
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
              <li>Member Event: $30</li>
              <li>Member Event Double Runs: $60*</li>
              <li>Non-member Event Price: $40</li>
              <li>Penalty for On-Site Registration: $10</li>
            </ul>
            <a href="/Events" className="special">
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
            SCCA autocross events can be found all over the country. Many of our drivers go beyond the local level and challenge other regions or even compete at the national SCCA events.
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
