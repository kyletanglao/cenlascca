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
                <li><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana"><span class="button fit">Jan 31</span></a></li>
                <li><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana"><span class="button fit">Feb 28</span></a></li>
                <li><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana"><span class="button fit">Mar 28</span></a></li>
                <li><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana"><span class="button fit">Apr 25</span></a></li>
                <li><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana"><span class="button fit">May 30</span></a></li>
              </ul>
              </div>
            </div>
          </section>
      </section>
          
    </section>
    
  </Layout>
);

export default IndexPage;
