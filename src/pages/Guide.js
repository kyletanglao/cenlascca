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
          <h2>Autocross Guide</h2>
          <ul className="actions grid navGrid">
            <li><a href="#two" className="button button-light">What to bring</a></li>
            <li><a href="#three" className="button button-light">Preparing your car</a></li>
            <li><a href="#four" className="button button-light">Itinerary</a></li>
            <li><a href="#five" className="button button-light">Driving</a></li>
            <li><a href="#six" className="button button-light">Worker Stations</a></li>
            <li><a href="#seven" className="button button-light">Working</a></li>
            <li><a href="#eight" className="button button-light">Car Classes</a></li>
            <li><a href="#nine" className="button button-light">Reference</a></li>            
					</ul>
        </div>
      </header>
      <section id="wrapper">
        <section className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major left">Introduction</h2>
              <div class="textLeft">
                <p>“Solo®” is the brand name for SCCA® Autocrossing and on paper it seems very simple – use traffic cones to make a mini-roadcourse in a large parking lot or unused airport tarmac and see who can drive it the quickest without hitting any cones or going off course.</p>
                <p>Despite the generally low speeds attained during competition, it’s one of the fastest paced, rapid-fire forms of motorsports you can find, with barriers to entry so low that many people are able to compete and be competitive at it.</p>
                <p>Competitors range from the casual participant who may use the same daily driver that they car-pool with to the hard-core driver who has a special car, special tires and uses lots of vacation days to squeak out every last fraction of a second. In between the extremes, there are levels and classes for different degrees of car modification. There are even classes for&nbsp;ladies and&nbsp;also a Junior Driver program for&nbsp;kids in age appropriate karts.</p>
                <p>If you have never autocrossed before or don’t know the specific details, check out the <a href="https://www.scca.com/pages/i-want-to-autocross"><b>"I want to Autocross"</b></a> SCCA Official page. It will give you the basics of participating in an event. Don’t worry – it’s pretty easy and there are people to help along the way.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="two" className="wrapper alt spotlight style2">
            <div className="inner">
              <div className="content">
                <h2 className="major">What to bring</h2>
                <div class="left grid"><i class="left width100">R = Required, O = Optional</i></div>
              <br></br>
                <div class="grid">
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Driver's License</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Payment</div>
                  </div>        
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Closed Toe Shoes</div>
                  </div>                     
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Helmet*</div>
                  </div>
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Tire Gauge</div>
                  </div>
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Numbers/Tape</div>
                  </div>      
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Sunscreen</div>
                  </div>          
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Lunch Plans</div>
                  </div>        
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Air Compressor</div>
                  </div>                 
                </div>    
                <br></br><p>*Please see <a href="https://www.scca.com/downloads/44726-2019-03-20-solo-helmet-cert-decals/download" class=""><b>2019 Helmet Certification Label Chart</b></a> for qualifying helmets              </p>
              </div>
            </div>
          </section>        
          <section id="three" className="wrapper spotlight style3">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Preparing your car</h2>
                <div class="left grid"><i class="left width100">R = Required, O = Optional</i></div>
                <br></br>                
                <div class="grid">
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">No loose items</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Sufficient fuel</div>
                  </div>        
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Undamaged tires</div>
                  </div>                     
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Battery secured</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Functional seatbelts</div>
                  </div>
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Functional brakes</div>
                  </div>        
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">Functional steering and suspension</div>
                  </div>                                 
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">All wheel lugs present and tightened</div>
                  </div>      
                  <div className="checkItem required">
                    <div class="checkIcon">R</div>
                    <div class="checkText">No fluid leaks</div>
                  </div>          
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">40+ PSI in tires</div>
                  </div>        
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Securely mounted action camera</div>
                  </div>         
                  <div className="checkItem">
                    <div class="checkIcon">O</div>
                    <div class="checkText">Clean windshield</div>
                  </div>                            
                </div> 
                <br></br>
              </div>
            </div>
          </section>
          <section id="four" className="wrapper alt spotlight style4">
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
                  <li><span class="time">~3:30 PM</span> Results Posted</li>
                </ul>
              </div>
            </div>
          </section>          
          <section id="five" className="wrapper spotlight style5">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Driving the course</h2>
                <div class="left">
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
                  <h3>Red Flag</h3>
                  <p>If you are driving and you see a red flag being waved (anywhere), quickly bring your car to a safe stop. When a course worker clears you, you may proceed to drive through the finish timers and return to grid. If the red flag was not your fault, your run will not count and you will get a rerun.</p>
                                    
                  <h3>Spinning Out or Getting Lost</h3>  
                    <p>If you spin out or get lost on course, do not forget to drive through the finish timers. This prevents timing errors and ensures the event continues smoothly.</p>
                  </div>             
              </div>
            </div>
          </section>   
          <section id="six" className="wrapper spotlight alt style6">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Worker stations</h2>
                <div class="table-wrapper">
                  <table class="left lessBottom">
                    <thead>
                      <tr><th>Role</th><th>Description</th><th>Radio</th><th>#</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><b>Corner Captain</b></td><td>Relay penalty information to timing. Controls red flag and oversees corner workers.</td><td>Yes</td><td>4-5</td></tr>
                      <tr><td><b>Corner Worker*</b></td><td>Runs to reset cones and report penalties to captain.</td><td>No</td><td>12-15</td></tr>
                      <tr><td><b>Start</b></td><td> Lines up cars at starting line for release.</td><td>Yes</td><td>1</td></tr>
                      <tr><td><b>Grid</b></td><td>Sends cars to start.</td><td>Yes</td><td>1-2</td></tr>
                      <tr><td><b>Safety Steward</b></td><td>Oversees safety of event.</td><td>Optional</td><td>1</td></tr>
                      <tr><td><b>Timing</b></td><td>Oversees timing software and assigns penalties.</td><td>Yes</td><td>1-2</td></tr> 
                      <tr><td><b>Announcer</b></td><td>Announces times over loudspeaker.</td><td>No</td><td>1</td></tr>                                           
                      <tr><td><b class="breakme">Photographer</b></td><td>Takes photos. Requires a spotter if shooting on course.</td><td>No</td><td>1</td></tr>                                           
                      <tr><td><b>Driving Coach</b></td><td>Fastest driver from previous event rides with drivers requesting coaching</td><td>No</td><td>1</td></tr>                    
                      </tbody>
                  </table>
                  *Novices will be assigned as corner workers for their first few events
                  </div>             
              </div>
            </div>
          </section>           
          <section id="seven" className="wrapper spotlight style5">
            <div className="inner">
              <div className="content">
                <h2 className="major left">Working the course</h2>
                <div class="left">
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
                    <li>If there is any danger on course such as a disabled or spun out vehicle, wave the red flag</li>
                    <li>If you see another captain waving a red flag, you need to wave yours making sure all cars are stopped</li>
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
          <section id="eight" className="wrapper spotlight alt style4">
            <div className="inner">
            <div className="content textLeft">
                <h2 className="major left">Car Classes</h2>
                <h3>Finding a class for your lightly modified vehicle</h3>      
                <p class="lessBottom">For stock or lightly modified cars, your car will likely fall into Street or Street Touring class. Car classes are listed on page 184 of the 2019 Solo National Solo Rules.</p>
                <a href="https://www.scca.com/downloads/47209-2019-09-02-solo-rules-book-1-complete-reduced/download" class="button fit">2019 SCCA® National Solo® Rules</a>        
                <br></br><br></br><br></br>
                <h3>Finding a class for your modified vehicle</h3>      
                <p class="lessBottom">For modified cars, you will fall into a certain class based on the magnitude of the changes. Check the cheat sheet below for an approximate classing. Refer to the official rules above for specifics.</p>                
                <a href="https://www.scca.com/downloads/44544-2019-03-08-quick-reference-of-category-allowances/download" class="button fit">2019 Category Allowances "Cheat Sheet" </a>&nbsp;&nbsp;        
                <br></br><br></br>
                <h3>Understanding PAX values</h3>
                <p>PAX is an index system designed to equalize participants running cars from different SCCA Solo classes in the same local regional class. The PAX value is a multiplier used on the entrant's time, and then compared directly with other class competitors and their PAX multiplied time. PAX values are updated yearly taking data from 500+ national SCCA Solo events.</p>
            
                <div class="table-wrapper">
                  <table class="left lessBottom">
                    <thead>
                      <tr><th>Class</th><th>Popular Cars*</th><th>Pax Index</th></tr>
                    </thead>
                    <tbody>
                      <h4 class="category">Street</h4>
                      <tr><td><b>SS</b></td><td>Porsche GT4/GT3/Cayman GT4, Acura NSX, Chevrolet Corvette Z06 (C7)</td><td>0.821</td></tr>
                      <tr><td><b>AS</b></td><td>Chevrolet Corvette Z06 (C6), Porsche Cayman</td><td>0.817</td></tr>
                      <tr><td><b>BS</b></td><td>Tesla Model 3, Lotus Evora, BMW M2/M3/M4, Porsche Cayman S (06-08)</td><td>0.810</td></tr>
                      <tr><td><b>CS</b></td><td>Mazda Miata ND1/ND2, Honda S2000</td><td>0.809</td></tr>
                      <tr><td><b>DS</b></td><td>Honda Civic Type R, Ford Focus RS, Audi TTS</td><td>0.800</td></tr>
                      <tr><td><b>ES</b></td><td>Mazda Miata (NB), Toyota MR2 Spyder</td><td>0.789</td></tr> 
                      <tr><td><b>FS</b></td><td>2011 BMW M3 Competition Package</td><td>0.803</td></tr>                                           
                      <tr><td><b>GS</b></td><td>Honda Civic Si (17-19), Volkswagen GTI</td><td>0.788</td></tr>                                           
                      <tr><td><b>HS</b></td><td>Ford Fiesta ST, Honda Civic Si (06-08)</td><td>0.780</td></tr>                      
                      <tr><td><b>SSR</b></td><td>Chevrolet Corvette GS/Z06</td><td>0.780</td></tr>                                         
                      <h4 class="category">Street Touring</h4>
                      <tr><td><b>STU</b></td><td>BMW M3, Subaru WRX STI, Mitsubishi Evo IX, Nissan 350Z/370Z</td><td>0.828</td></tr>                    
                      <tr><td><b>STR</b></td><td>Mazda Miata ND1/ND2</td><td>0.827</td></tr>                    
                      <tr><td><b>STX</b></td><td>Subaru BRZ, Scion FR-S, Mazda RX-8 </td><td>0.815</td></tr>                    
                      <tr><td><b>STS</b></td><td>Mazda Miata (NA 1.6), Honda CRX/CRX Si</td><td>0.811</td></tr>                    
                      <tr><td><b>STH</b></td><td>Subaru Impreza WRX (14-16), Audi TT, Mazda Mazdaspeed 3, Volkswagen Golf R</td><td>0.813</td></tr>                    
                      <h4 class="category">Street Prepared</h4>
                      <tr><td><b>SSP</b></td><td>Covette Z06 (C6), Porsche GT3, Lamborghini Huracan, McLaren 720S</td><td>0.853</td></tr>                    
                      <tr><td><b>ASP</b></td><td>Mitsubishi Evo IX/VIII, BMW 1M, Mazda RX7 (FD)</td><td>0.850</td></tr>                    
                      <tr><td><b>BSP</b></td><td>Mazda Miata (ND), Honda S2000, Nissan 370Z</td><td>0.851</td></tr> 
                      <tr><td><b>CSP</b></td><td>Mazda Miata (NA/NB)</td><td>0.857</td></tr>                    
                      <tr><td><b>DSP</b></td><td>Mazda RX-8, BMW 330Ci/325is/323i</td><td>0.840</td></tr>                    
                      <tr><td><b>ESP</b></td><td>Chevrolet Camaro, Ford Mustang, Infiniti G35</td><td>0.836</td></tr>                    
                      <tr><td><b>FSP</b></td><td>Volkswagen Rabbit, Toyota Corolla GTS ('86), Honda CRX, BMW 318TI</td><td>0.824</td></tr>                    
                      <h4 class="category">Street Modified</h4>
                      <tr><td><b>SSM</b></td><td>Honda S2000, Mazda Miata (NA), Lotus Elise, Toyota MR2</td><td>0.875</td></tr>                    
                      <tr><td><b>SM</b></td><td>Mitsubishi Evolution IX, Subaru Impreza WRX</td><td>0.855</td></tr>                    
                      <tr><td><b>SMF</b></td><td>Honda Civic, Honda CRX</td><td>0.841</td></tr>                    
                      <h4 class="category">Prepared</h4>
                      <tr><td><b>XP</b></td><td>Mazda RX-7 (FD)</td><td>0.885</td></tr>                    
                      <tr><td><b>CP</b></td><td>Ford Mustang (65-11), Chevrolet Camaro (79-97)</td><td>0.848</td></tr>                    
                      <tr><td><b>DP</b></td><td>Mazda Miata (NA)</td><td>0.858</td></tr>                    
                      <tr><td><b>EP</b></td><td>Honda Civic (86-90), Honda CRX</td><td>0.849</td></tr>                    
                      <tr><td><b>FP</b></td><td>Honda S2000, Mazda Miata (NB), Datsun 240/280Z</td><td>0.863</td></tr>                    
                      
                      </tbody>
                  </table>
                  *Based on 2019 and 2018 SCCA National Solo Finale Entrants
                  <br></br><br></br>
                  </div>                  
              </div>
            </div>
          </section>             
          <section id="nine" className="wrapper spotlight style5">
            <div className="inner">
            <div className="content">
                <h2 className="major left">Reference</h2>
                <ul class="alt flexend left">
                  <li><span class="time">SCCA Official</span><a target="_blank" rel="noopener noreferrer" href="https://www.scca.com/pages/autocross-faq">Autocross FAQ</a></li>
                  <li><span class="time">SCCA Official</span><a target="_blank" rel="noopener noreferrer" href="https://www.scca.com/pages/what-is-autocross">What is Autocross?</a></li>
                  <li><span class="time">SCCA Official</span><a target="_blank" rel="noopener noreferrer" href="https://www.scca.com/downloads/44726-2019-03-20-solo-helmet-cert-decals/download">2019 Helmet Certification Label Chart</a></li>
                  <li><span class="time">SCCA Official</span><a target="_blank" rel="noopener noreferrer" href="https://www.scca.com/pages/solo-cars-and-rules">2019 SCCA® National Solo® Rules</a></li>
                  <li><span class="time">SCCA Official</span><a target="_blank" rel="noopener noreferrer" href="https://www.scca.com/downloads/44544-2019-03-08-quick-reference-of-category-allowances/download">2019 Category Allowances "Cheat Sheet" </a></li>
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
