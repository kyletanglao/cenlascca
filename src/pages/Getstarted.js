import React from 'react';

import Layout from '../components/Layout';
import cones from '../assets/img/cones.png';

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
              <h2 className="major left">Things to bring</h2>
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
                    <div class="checkText">All wheel lugs present and tightened</div>
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
                <h2 className="major left">Event Itinerary</h2>
                <ul class="alt flexend">
                  <li><span class="time">4 days prior</span> Map posted</li>
                  <li><span class="time">1 day prior</span> Online registration closes</li>
                  <li><span class="time">6:45 AM</span> Set up site</li>
                  <li><span class="time">8:00 AM</span> Check-in & Tech Opens</li>
                  <li><span class="time">9:15 AM</span> Check-in & Tech Closes</li>
                  <li><span class="time">9:20 AM</span> Novice Walk</li>
                  <li><span class="time">10:15AM</span> Group A Drives | Group B Works</li>
                  <li><span class="time">TBA</span> Group B Drives | Group A Works</li>
                  <li><span class="time">TBA</span> 1 hour lunch break</li>                  
                  <li><span class="time">TBA</span> Group A Drives | Group B Works</li>
                  <li><span class="time">TBA</span> Group B Drives | Group A Works</li>
                  <li><span class="time">~3:00 PM</span> Results Posted</li>
                </ul>
              </div>
            </div>
          </section>          
          <section id="four" className="wrapper spotlight alt style4">
            <div className="inner">
              <div className="content">
                <h2 className="major">Driving the course</h2>
                <div class="table-wrapper">
                  <h4>Pointer Cones</h4>      
                  <p>The cones that are lying down are directional cones or, "pointers." They act as arrows to tell you which side of the cone to go on. If you happen to go on the wrong side of these pointer cones the penalty applied is considered a "Did Not Finish" (DNF).</p>            
                  <h4>Hitting a cone</h4>
                  <p>Each cone position is marked with a chalk outline known as a "box.". If your car causes a cone to fall over or get knocked completely out of its box, it’s a 2-second penalty. If a driver runs over or bumps a cone and it stands back up or doesn't fall over no penalty is applied as long as some part of the cone is still touching the box.</p>
                  <span class="image fit kindaBig">
                    <img src={cones} alt="" class=""></img>
                  </span>
                  </div>             
              </div>
            </div>
          </section>   
          <section id="five" className="wrapper spotlight style5">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Worker stations</h2>
                <div class="table-wrapper">
                  <table class="left">
                    <thead>
                      <tr><th>Role</th><th>Description</th><th>Radio</th><th># Needed</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Corner Captain</td><td>Relay penalty information to timing. Controls red flag and oversees corner workers.</td><td>Yes</td><td>4-5</td></tr>
                      <tr><td>Corner Worker*</td><td>Runs to reset cones and report penalties to captain.</td><td>No</td><td>12-15</td></tr>
                      <tr><td>Start</td><td> Lines up cars at starting line for release.</td><td>Yes</td><td>1</td></tr>
                      <tr><td>Grid</td><td>Sends cars to start.</td><td>Yes</td><td>1-2</td></tr>
                      <tr><td>Safety Steward</td><td>Oversees safety of event.</td><td>Optional</td><td>1</td></tr>
                      <tr><td>Timing</td><td>Oversees timing software and assigns penalties.</td><td>Yes</td><td>1-2</td></tr> 
                      <tr><td>Announcer</td><td>Announces times over loudspeaker.</td><td>No</td><td>1</td></tr>                                           
                      </tbody>
                  </table>
                  *Novices will be assigned as corner workers for their first few events
                  </div>             
              </div>
            </div>
          </section>             
      </section>
      
    </section>
    
  </Layout>
);

export default IndexPage;
