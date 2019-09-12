import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Get Started with autocross</h2>
          <p>The competition begins before the course walk</p>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major">Things to bring</h2>
                <div class="grid">
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fas fa-id-badge"></i></div>
                    <div class="checkText">Driver's License</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-id-badge"></i></div>
                    <div class="checkText">Entry Fee Payment</div>
                  </div>        
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-id-badge"></i></div>
                    <div class="checkText">Closed Toe Shoes</div>
                  </div>                     
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-id-badge"></i></div>
                    <div class="checkText">Helmet</div>
                  </div>
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-stopwatch"></i></div>
                    <div class="checkText">Tire Gauge</div>
                  </div>
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-tape"></i></div>
                    <div class="checkText">Numbers/Tape</div>
                  </div>      
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">Sunscreen</div>
                  </div>          
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">Lunch Plans</div>
                  </div>        
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">Air Compressor</div>
                  </div>                 
                </div>                                            
            </div>
          </div>
        </section>
          <section id="two" className="wrapper alt spotlight style2">
            <div className="inner">
              <div className="content">
                <h2 className="major">Preparing your car</h2>
                  <ul class="alt">
                    <li>
                      <h4>Driver's License</h4>
                      <p>Unless you’re entering one of the Karting classes, you will need a current driver's license to enter an SCCA Solo event. Bring it with you to show the people working registration you’re good to go.</p></li>
                    <li></li>
                    <li></li>
                  </ul>
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
              <h3 className="major">2018-2019 Season</h3>
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
              <h3 className="major">2018 Spring Series</h3>
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
              <h3 className="major">2017 Rotolos Fall Series</h3>
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
