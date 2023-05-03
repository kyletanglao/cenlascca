import React from 'react';

import Layout from '../components/Layout';

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
          <section id="two" className="wrapper alt spotlight style2">
            <div className="inner">
              <div className="content left">
                <h2 className="major">2020 Season</h2>
                <h4>2020 Season Rules</h4>
                <ul className="Alt">
                  <li><s>Drivers must complete 6 out of 9 events to qualify for a trophy</s></li>
                  <li><s>Best 6 events will count towards overall Pax championship</s></li>
                  <li>Season points are no longer active this year due to Covid cancellations</li>
                </ul>
                <ul className="actions grid events">
                <li><a href="http://msreg.com/january19"><span class="button fit">Jan 19</span></a></li>
                <li><a href="http://msreg.com/february23"><span class="button fit">Feb 23</span></a></li>
                <li><a href="http://msreg.com/march29th"><span class="button fit">Mar 29</span></a></li>
                <li><span class="button fit disabled">Apr 26</span></li>
                <li><span class="button fit disabled">May 9</span></li>
                <li><a href="http://msreg.com/september27th"><span class="button fit">Sep 27</span></a></li>
                <li><a href="http://msreg.com/october25th"><span class="button fit">Oct 25</span></a></li>
                <li><a href="http://msreg.com/november22nd"><span class="button fit">Nov 22</span></a></li>
                <li><span class="button fit">Dec 6</span></li>
              </ul>
              </div>
            </div>
          </section>
      </section>
          
    </section>
    
  </Layout>
);

export default IndexPage;
