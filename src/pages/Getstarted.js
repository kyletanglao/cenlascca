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
                    <div class="checkText">Payment</div>
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
                <div class="grid">
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fas fa-id-badge"></i></div>
                    <div class="checkText">No loose items</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-id-badge"></i></div>
                    <div class="checkText">Sufficient fuel</div>
                  </div>        
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-id-badge"></i></div>
                    <div class="checkText">Undamaged tires</div>
                  </div>                     
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-id-badge"></i></div>
                    <div class="checkText">Battery secured</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-stopwatch"></i></div>
                    <div class="checkText">Functional seatbelts</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-stopwatch"></i></div>
                    <div class="checkText">Functional brakes</div>
                  </div>        
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-stopwatch"></i></div>
                    <div class="checkText">Functional steering and suspension</div>
                  </div>                                 
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-tape"></i></div>
                    <div class="checkText">All wheel lugs present and tightend</div>
                  </div>      
                  <div className="checkItem required">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">No fluid leaks</div>
                  </div>          
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">40+ PSI in tires</div>
                  </div>        
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">Securely mounted action camera</div>
                  </div>         
                  <div className="checkItem">
                    <div class="checkIcon"><i class="fa fa-spray-can"></i></div>
                    <div class="checkText">Clean windshield</div>
                  </div>                            
                </div> 
              </div>
            </div>
          </section>
          <section id="three" className="wrapper spotlight style3">
            <div className="inner">
              <div className="content">
                <h2 className="major">Event Itinerary</h2>
                <div class="grid iteneraryGrid">
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Map Posted</div>
                      <div class="time">4 days prior</div>                    
                    </div>
                  </div>      
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Online <span class="smallText">Registration</span> Closes</div>
                      <div class="time">1 day prior</div>                    
                    </div>
                  </div>                                    
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Set Up Site</div>
                      <div class="time">6:45 AM</div>                    
                    </div>
                  </div>  
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Check-In Opens</div>
                      <div class="time">8:00 AM</div>                    
                    </div>
                  </div>            
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Check-In Closes</div>
                      <div class="time">9:15 AM</div>                    
                    </div>
                  </div>        
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Novice Walk</div>
                      <div class="time">9:20 AM</div>                    
                    </div>
                  </div>     
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event"><div class="underline">Group A Drives</div> Group B Works</div>
                      <div class="time">10:15 AM</div>                    
                    </div>
                  </div>      
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event"><div class="underline">Group B Drives</div> Group A Works</div>
                      <div class="time">TBA</div>                    
                    </div>
                  </div> 
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Lunch Break</div>
                      <div class="time">1 Hour</div>                    
                    </div>
                  </div>    
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event"><div class="underline">Group A Drives</div> Group B Works</div>
                      <div class="time">TBA</div>                    
                    </div>
                  </div>   
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event"><div class="underline">Group B Drives</div> Group A Works</div>
                      <div class="time">TBA</div>                    
                    </div>
                  </div>           
                  <div className="iteneraryItem">
                    <div class="iteneraryIcon"></div>
                    <div class="iteneraryText">
                      <div class="event">Results</div>
                      <div class="time">~3:00PM</div>                    
                    </div>
                  </div>                                                                                                                           
                </div>
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
