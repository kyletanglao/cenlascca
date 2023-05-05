import React from 'react';

import Layout from '../components/Layout';
import spotlight from '../assets/images/spotlights/KDuplantis.jpg';

const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2><span class="classNumber">#24 STH </span>Khai Duplantis</h2>
          <h3 class="white">CENLA January 2020 Driver Spotlight</h3>
          <div class="intRuns">
            <div class="intRun">
              <div class="runNumber">Run 1</div>
              <div class="runTime">44.112+1</div>
            </div>
            <div class="intRun">
              <div class="runNumber">Run 2</div>
              <div class="runTime">42.995</div>
            </div>      
            <div class="intRun">
              <div class="runNumber">Run 3</div>
              <div class="runTime">43.157+1</div>
            </div>    
            <div class="intRun">
              <div class="runNumber">Run 4</div>
              <div class="runTime">42.411</div>
            </div>    
            <div class="intRun">
              <div class="runNumber">Run 5</div>
              <div class="runTime">41.539</div>
            </div>    
            <div class="intRun bestRun">
              <div class="runNumber">Run 6</div>
              <div class="runTime">41.421</div>
            </div>                                                          
          </div>
          
          <div class="intResults">
          <span class="car">  2014 Ford Fiesta ST</span>
          <span class="best">Best Time: 41.421</span>
          <span class="pax">3rd Pax</span>
          <span class="raw">3rd Raw</span>
          </div>

        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
            <a href={spotlight}><img class="imagefit" src={spotlight} alt="-"></img></a>
                <div class="left"><i>
                One of the region’s most talented drivers, Khai Duplantis is known for surprising the uninitiated crowd with his red Ford Fiesta ST;  a car that we regulars have learned not to underestimate when Khai is behind the wheel. His driving skills have not only netted him significant season points, but he has also been recently headhunted to drive another competitor’s Porsche 911 at the Nola Motorsports Park big track - simply for educational purposes.                            
                <br></br><br></br>
                Khai has placed consistently in both Delta and Cenla season points; notably closer than ever to his first Delta Pax Championship in 2019, short by only 0.20 pax points. Nowadays, it’s looking like only a matter of time until Khai wins his first regional pax championship.
                </i></div>      
                <hr></hr>
                <div class="left">
                <b>K. Tanglao:</b> Khai, congratulations on your double raw/pax podium. 3rd is not a bad place to be, especially considering you were only 0.068s away from FTD.
                <br></br><br></br>Can you talk to us a little bit about your mindset before your first run? Were there any particular spots in the course that you were focused on? Did you find it easier to think about driving now that your car is in a stable state? 
                </div>
                <br></br>
                <div class="left">
                <b>K. Duplantis:</b> My mind before the first run was 90% on the course and 10% on cold tires. I knew that having a head start on the course would give me an advantage while everyone else is being surprised by tires that will not hold heat. 
                <br></br> <br></br>
                What I did not know is how much of a challenge I would have with my own course on the first heat. My troubles with finding my driving line left me behind Kyle (My usual benchmark) by a sizeable amount, but this only worried me under the surface, as I was hopeful for heat 2 to bring warmer track conditions.
                <br></br> <br></br>
                In heat 2 I primarily focused on carrying as much speed as possible in the large sweeper, which I knew was my biggest time loss and practicing an "Odd" line on turn 2 that I spied the alien himself (Max Bales) nailing consistently (still never got that right myself). In the end, the combination of improving one element at a time, not letting low grip getting the best of my mind, and warmer course conditions ended in me shaving about 1.5 seconds off of my heat 1 time.
                <br></br> <br></br>
                It is definitely easier to think about driving when you aren't also troubleshooting clunks or dead tired from just barely getting your car ready the day before an event. Is my improved mental state the reason why I bested Kyle for this event? Find out at the next autocross!
                </div>       
                <br></br>
                <div class="left">
                <b>K. Tanglao:</b> Having you as a rival definitely keeps me motivated. I am really looking forward to Delta. You got me by about 3 tenths both this month and at Evo last December, so I am damn sure looking to close the gap. 
                <br></br><br></br>
                You mentioned changing your suspension settings in the middle of the event. Obviously, it looks like it played out well, but can you tell us a little bit about how you figured out what your car needed?
                </div>
                <br></br>
                <div class="left">
                <b>K. Duplantis:</b> Having a rival you can learn from is definitely one of the quickest ways to improve, luckily your rivals in autocross are generally friendly! 
                <br></br><br></br>
                The suspension adjustments were simply to offset the cold tires. I noticed no matter what I did, my rear tires were skating, so I dialed the rear shocks softer and let a bit of tire pressure out to gain some rear grip and I was able to drive with much more confidence.
                </div>
                <br></br>
                <div class="left">
                <b>K. Tanglao:</b> Is there anything you learned from this event that you will be taking with you to your next autocross?
                </div>
                <br></br>
                <div class="left">
                <b>K. Duplantis:</b> I need to work on staying on the driving line in areas with fewer cones/visual aids and also I need a limited slip differential.
                </div>
                <br></br>
            </div>
          </div>
        </section>                           
      </section>
    </section>
    
  </Layout>
);

export default IndexPage;
