import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <div className="bannerText">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
					<ul className="actions">
            <li><a href="/#" className="button primary">Get started with autocross</a></li>
            <li><a href="/#" className="button button-light">Live timing</a></li>
            <li><a href="/Results" className="button button-light">Results</a></li>
            <li><a href="/Events" className="button button-light">Events</a></li>
					</ul>

        </div>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Compete with your car in a safe environment</h2>
            <p>
            “Solo®” is the brand name for SCCA® Autocrossing and on paper it seems very simple – use traffic cones to make a mini-roadcourse in a large parking lot or unused airport tarmac and see who can drive it the quickest without hitting any cones or going off course.
            </p>
            <a href="https://www.scca.com/pages/what-is-autocross" className="special">
              SCCA Official Introduction
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Compete with your car</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id hi arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Motorsport has never been so affordable</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. 
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

    </section>
  </Layout>
);

export default IndexPage;
