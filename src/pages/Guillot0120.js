import React from 'react';

import Layout from '../components/Layout';
import spotlight from '../assets/images/spotlights/DGuillot.jpg';

const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2><span class="classNumber">#12 HS </span>Daniel Guillot</h2>
          <h3 class="white">CENLA January 2020 Driver Spotlight</h3>
          <div class="intRuns">
            <div class="intRun">
              <div class="runNumber">Run 1</div>
              <div class="runTime">49.085+1</div>
            </div>
            <div class="intRun">
              <div class="runNumber">Run 2</div>
              <div class="runTime">46.703+1</div>
            </div>      
            <div class="intRun">
              <div class="runNumber">Run 3</div>
              <div class="runTime">46.687</div>
            </div>    
            <div class="intRun">
              <div class="runNumber">Run 4</div>
              <div class="runTime">47.097+1</div>
            </div>    
            <div class="intRun">
              <div class="runNumber">Run 5</div>
              <div class="runTime">46.655</div>
            </div>    
            <div class="intRun bestRun">
              <div class="runNumber">Run 6</div>
              <div class="runTime">45.248</div>
            </div>                                                          
          </div>
          
          <div class="intResults">
          <span class="car">  2008 Toyota “BadGirl” Corolla</span>
          <span class="best">Best Time: 45.248</span>
          <span class="pax">10th Pax</span>
          <span class="raw">20th Raw</span>
          </div>

        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
            <a href={spotlight}><img class="imagefit" src={spotlight} alt="-"></img></a>
                <div class="left"><i>
                Daniel Guillot had his first autocross just one year ago right here at Lamar-Dixon. Largely uncontested, but always striving to find more speed, Dan won HS Champion for the 2018-2019 Cenla season, as well as Delta 2019. Nominated for Rookie of the Year at Delta region, Dan has certainly made an impression with his dark blue Corolla.
                <br></br><br></br>
                With his last three autocross events, Dan has jumped from mid-pack (Cenla Nov) to top third (Delta Jan) and now to top ten in his H Street Toyota Corolla. Was the breakthrough in the development of the car or the driver? How high can he go with the humble Corolla?
                </i></div>                  
                <hr></hr>
                <div class="left">
                <b>K. Tanglao: </b>Dan, congratulations on your career-first top 10 PAX placement. What a great feeling it must be to have made so much progress in such a small window of time. It is clear from the onboard footage that your driving style has progressively changed over time. Can you describe your journey over the last few events? 
                </div><br></br>
                <div class="left">
                <b>D. Guillot: </b>When I first started in autocross I was terrible. I had all of the bad habits and didn’t know what looking ahead was or what driving lines were. From that first event I had learned that I needed some work and slowly started to learn how to drive effectively and efficiently. Eventually, I learned how to control the car better and prevent understeering into every corner and throttle control. Coming full circle after this event, I can sum up my experiences with never stop learning and keeping at it and you will see results. Make friends who make you better and can become rivals. Make each other faster and talk to those around you in grid and don’t be afraid to ask for ride alongs unless it’s the last run of the day. 
                <br></br> <br></br> It is a great feeling to have achieved a top ten pax position. Over the past few events a lot has changed in my driving style and how I view the course. Learning how to walk a course goes a long way in making you faster. You can visualize your lines and what to do when and how you’re going to do it. When it comes to driving style, smooth inputs and better pedal control are the key to my success. 
                </div><br></br>
                <div class="left">
                <b>K. Tanglao: </b>I agree, mental visualization is a must-have skill in autocross. I have found out that fast drivers put in so much hard work into mental awareness and visualization. Speaking of lines, what did you think of the course?
                </div><br></br>
                <div class="left">
                <b>D. Guillot: </b>It was a challenging course to figure out no doubts about that. Choosing the right lines would reward you in a faster time but if you messed up and got behind then everything tightened up and just that much harder to get a good time down.
                </div><br></br>
                <div class="left">
                <b>K. Tanglao: </b>Can you talk to us a little bit about your mindset before your first run? Were you arriving with some confidence found from the Delta event?
                </div><br></br>
                <div class="left">
                <b>D. Guillot: </b>I was confident in the car definitely, after an entire full year of autocrossing it, I can safely say I have full confidence in its abilities. Coming from the Delta event just helped to show that the car hasn’t given up on me yet. When it comes to first runs I always try and take it easy to use it as a feeler for the course and to get some heat into the tires and brakes. I also try and pinpoint any weak points I’m having on course whether it’s a sweeper or a tight transition like we had at this event. Mentally marking those items and then reviewing over them after your first run makes your next runs faster.
                </div><br></br>
                <div class="left">
                <b>K. Tanglao: </b>What was it that you changed in order to get your fastest run?
                </div><br></br>
                <div class="left">
                <b>D. Guillot: </b>I changed up my lines to better utilize my car’s power. Since it’s low on power it requires momentum so I took some corners a little wider but I was carrying more speed. Ultimately, being just a little more aggressive and changing up the line is what I attribute to my last being considered the hero run. It was a tough course to extract time from and finding the proper line was a great challenge.                </div><br></br>
                <div class="left">
                <b>K. Tanglao: </b>Is there anything you learned from this event that you will be taking with you to your next autocross?
                </div><br></br>
                <div class="left">
                <b>D. Guillot: </b>Talk to the people you grid next to you never know what advice they can offer to help make your faster plus you can make friends that way. You can never have enough course walks.
                </div><br></br>

            </div>
          </div>
        </section>                           
      </section>
    </section>
    
  </Layout>
);

export default IndexPage;
