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
          <p>Monthly meetings are on the second Tuesday of every month at the Rotolo's on Ben Hur.</p>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major">2019 Fall Sprint</h2>
              <ul className="actions">
                <li><a href="http://msreg.com/september2019" className="button fit">Sep 22</a></li>
                <li><a href="http://msreg.com/october2019" className="button fit">Oct 27</a></li>
                <li><span class="button disabled">Nov 02</span></li>
                <li><span class="button disabled">Dec 15</span></li>
              </ul>
            </div>
          </div>
        </section>
          <section id="two" className="wrapper alt spotlight style2">
            <div className="inner">
              <div className="content">
                <h2 className="major">2020 Season</h2>
                <h4>2020 Season Rules</h4>
                <ul className="Alt">
                  <li>Drivers must complete 5 out of 9 events to qualify for a trophy</li>
                  <li>Slowest two events will be dropped</li>
                </ul>
                <ul className="actions fit">
                <li><span class="button fit disabled">Jan</span></li>
                <li><span class="button fit disabled">Feb</span></li>
                <li><span class="button fit disabled">Mar</span></li>
                <li><span class="button fit disabled">Apr</span></li>
                <li><span class="button fit disabled">May</span></li>
                <li><span class="button fit disabled">Sep</span></li>
                <li><span class="button fit disabled">Oct</span></li>
                <li><span class="button fit disabled">Nov</span></li>
                <li><span class="button fit disabled">Dec</span></li>
              </ul>
              </div>
            </div>
          </section>
      </section>
          
    </section>
    
  </Layout>
);

export default IndexPage;
