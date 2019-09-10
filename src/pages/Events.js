import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Events</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major">2019 Fall Season</h2>
              <ul className="actions">
                <li><a href="http://msreg.com/september2019" className="button fit">Sep 22</a></li>
                <li><a href="http://msreg.com/october2019" className="button fit">Oct 27</a></li>
                <li><a href="_blank" className="button fit">Nov 02</a></li>
                <li><a href="_blank" className="button fit">Dec 15</a></li>
              </ul>
            </div>
          </div>
        </section>
          <section id="two" className="wrapper alt spotlight style2">
            <div className="inner">
              <div className="content">
                <h2 className="major">2020 Season</h2>
                <p>This season will span the calendar year, excluding our typical summer break of June, July and August. Dates pending.</p>
              </div>
            </div>
          </section>
      </section>
      <div className="wrapper">
        <div className="inner">
          <h2 className="major">Season Results Archive</h2>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
    
  </Layout>
);

export default IndexPage;
