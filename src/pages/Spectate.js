import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Spectate</h2>
          <p>CENLA SCCA events are open and free to the general public.</p>
          <ul className="actions grid navGrid">
            <li><a href="#one" className="button button-light">Spectating Areas</a></li>
            <li><a href="#two" className="button button-light">Ride Alongs</a></li>
            <li><a href="#three" className="button button-light">Photography</a></li>           
		  </ul>        
        </div>
      </header>
      <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="content left">
              <h2 className="major left">Spectating Areas</h2>
                <p class="left">Cenla provides a dedicated spectating area for those who wish to watch the event. We do not provide any seating, so feel free to bring a folding chair.</p>
                <h3>Spectator Policies</h3>
                <ul class="">
                  <li>  Do not leave any trash</li>
                  <li>  Do not distract drivers on the course</li>
                  <li> Ensure all your belongings are secure and cannot travel into the course</li>
                </ul>  

          
          </div>
        </div>
      </section>
      <section id="two" className="wrapper spotlight alt style2">
        <div className="inner">
          <div className="content">
              <h2 className="major left">Ride Alongs</h2>
              <h3>Passengers are allowed provided they:</h3>
                <ul class="">
                  <li>  are no younger than twelve (12) years old or are at least 57” tall;</li>
                  <li>  are in a vehicle which has passed safety (tech) inspection;</li>
                  <li>  are wearing a properly fitted seat belt and a properly fitted helmet (free loaner helmets available);</li>
                  <li>  are not holding a phone or camera during the timed run;</li>
                  <li>  have completed and signed the required participant waiver(s), including parents/guardians as appropriate</li>
                </ul>     
          </div>
        </div>
      </section>     
      <section id="two" className="wrapper spotlight style3">
        <div className="inner">
          <div className="content left">
              <h2 className="major left">Photography</h2>
              <h3>Photographers are allowed provided they:</h3>
                <ul class="">
                  <li>  either stay in the spectating area or are assigned a spotter (available on request);</li>
                  <li> post their photos on our <u><a href="https://www.facebook.com/groups/cenlascca/" target="_blank" rel="noopener noreferrer" > official Facebook group</a></u> for drivers to enjoy;</li>
                  </ul>     
          </div>
        </div>
      </section>          
      </section>
    </section>
  </Layout>
);

export default IndexPage;
