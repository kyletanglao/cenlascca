import React from 'react';

import Layout from '../components/Layout';
import cones from '../assets/img/cones.png';
import dnf from '../assets/img/DNF.png';
import signals from '../assets/img/signals.png';


const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Get Started with autocross</h2>
          <p>The competition begins before the course walk</p>
          <ul className="actions grid navGrid">
            <li><a href="#one" className="button button-light">What to bring</a></li>
            <li><a href="#two" className="button button-light">Preparing your car</a></li>
            <li><a href="#three" className="button button-light">Itinerary</a></li>
            <li><a href="#four" className="button button-light">Driving</a></li>
            <li><a href="#five" className="button button-light">Worker Stations</a></li>
            <li><a href="#six" className="button button-light">Working</a></li>
            <li><a href="#seven" className="button button-light">Reference</a></li>            
					</ul>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major left">What to bring</h2>
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
                  <h3>Pointer Cones</h3>      
                  <p>The cones that are lying down are directional cones or, "pointers." They act as arrows to tell you which side of the cone to go on. If you happen to go on the wrong side of these pointer cones the penalty applied is considered a "Did Not Finish" (DNF). Your time will still display but does not count for the competition.</p>            
                  <span class="image fit kindaBig center">
                    <img src={dnf} alt="" class=""></img>
                  </span>
                  <h3>Hitting a cone</h3>
                  <p>Each cone position is marked with a chalk outline known as a "box.". If your car causes a cone to fall over or get knocked completely out of its box, it’s a 2-second penalty. If a driver runs over or bumps a cone and it stands back up or doesn't fall over no penalty is applied as long as some part of the cone is still touching the box. Hitting pointer cones do not count as penalties.</p>
                  <br></br><br></br>
                  <span class="image fit kindaBig">
                    <img src={cones} alt="" class=""></img>
                  </span>
                  <br></br><br></br>
                  <h3>Spinning Out or Getting Lost</h3>  
                    <p>If you spin out or get lost on course, do not forget to drive through the finish timers. This prevents timing errors and ensures the event continues smoothly.</p>
                  </div>             
              </div>
            </div>
          </section>   
          <section id="five" className="wrapper spotlight style5">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Worker stations</h2>
                <div class="table-wrapper">
                  <table class="left lessBottom">
                    <thead>
                      <tr><th>Role</th><th>Description</th><th>Radio</th><th># Needed</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><b>Corner Captain</b></td><td>Relay penalty information to timing. Controls red flag and oversees corner workers.</td><td>Yes</td><td>4-5</td></tr>
                      <tr><td><b>Corner Worker*</b></td><td>Runs to reset cones and report penalties to captain.</td><td>No</td><td>12-15</td></tr>
                      <tr><td><b>Start</b></td><td> Lines up cars at starting line for release.</td><td>Yes</td><td>1</td></tr>
                      <tr><td><b>Grid</b></td><td>Sends cars to start.</td><td>Yes</td><td>1-2</td></tr>
                      <tr><td><b>Safety Steward</b></td><td>Oversees safety of event.</td><td>Optional</td><td>1</td></tr>
                      <tr><td><b>Timing</b></td><td>Oversees timing software and assigns penalties.</td><td>Yes</td><td>1-2</td></tr> 
                      <tr><td><b>Announcer</b></td><td>Announces times over loudspeaker.</td><td>No</td><td>1</td></tr>                                           
                      <tr><td><b>Photographer</b></td><td>Takes photos. Requires a spotter if shooting on course.</td><td>No</td><td>1</td></tr>                                           
                      <tr><td><b>Driving Coach</b></td><td>Fastest driver from previous event rides with drivers requesting coaching</td><td>No</td><td>1</td></tr>                    
                      </tbody>
                  </table>
                  *Novices will be assigned as corner workers for their first few events
                  </div>             
              </div>
            </div>
          </section>           
          <section id="six" className="wrapper spotlight alt style6">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Working the course</h2>
                <div class="table-wrapper">
                <span class="image fit kindaBig">
                    <img src={signals} alt="" class=""></img>
                  </span>                      
                  <h3>Corner Worker</h3>              
                  <ul>
                    <li>Make sure your back is not facing oncoming cars</li>
                    <li>When resetting a cone, always be aware of oncoming traffic</li>
                    <li>If a cone has moved but is safe, make the "safe" gesture from baseball</li>
                    <li>If a car has DNF'ed, make an X with your arms to communicate to your captain</li>
                    <li>You must be standing while course is hot</li>
                    <li>Hitting pointer cones do not count as penalties</li>
                  </ul>
                  <h3>Corner Captain</h3>
                  <ul>
                    <li>Before course is hot, inform workers what areas your station is covering</li>
                    <li>Only call in penalties for your section</li>
                    <li>Making a radio call should go like: "[Car Number], [Car Class], plus X cone(s)" or "[Car Number], [Car Class], DNF"</li>
                    <li>Spread workers out to cover common penalty occurences</li>
                    <li>Always be aware of radio calls, make sure volume is at maxed out</li>
                    <li>Do not roll up the red flag</li>
                    <li>Offer water to workers</li>
                    <li>If you see another captain waving a red flag, you need to wave yours</li>
                  </ul> 
                  <h3>Start</h3>
                  <ul>
                    <li>If there will be two cars on course, agree on a release point for the second car with a safety steward</li>                    
                    <li>Be aware of radio calls, Start will often be called to 'hold start' or cease the release of cars</li>
                    <li>Make sure timing is aware of what car number/classes are lined up</li>
                    <li>Make sure cars are lined up consistently to ensure fair play</li>
                    <li>Confirm that a driver is ready before release</li>
                  </ul> 
                  <h3>Grid</h3>
                  <ul>
                    <li>Make sure double driver cars are lined up towards the front of the grid</li>
                    <li>If double drivers are present, pick a halfway point in the grid to send out second drivers</li>
                    <li>Ensure that there are at least 3 cars at start</li>
                    <li>Make sure upcoming drivers are in their cars</li>
                  </ul>                                                      
                </div>             
              </div>
            </div>
          </section>      
          <section id="seven" className="wrapper spotlight style5">
            <div className="inner">
            <div className="content">
                <h2 className="major left">Reference</h2>
                <ul class="alt flexend">
                  <li><span class="time">SCCA Official</span><a href="https://www.scca.com/downloads/44726-2019-03-20-solo-helmet-cert-decals/download">2019 Helmet Certification Label Chart</a></li>
                  <li><span class="time">SCCA Official</span><a href="https://www.scca.com/pages/solo-cars-and-rules">SCCA Solo Rulebook</a></li>
                  <li><span class="time">SCCA Official</span><a href="https://www.scca.com/pages/what-is-autocross">What is Autocross?</a></li>
                </ul>
                <br></br><br></br>
              </div>
            </div>
          </section>                    
      </section>
      
    </section>
    
  </Layout>
);

export default IndexPage;
