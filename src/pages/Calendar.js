import React from 'react';

import Layout from '../components/Layout';


const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Calendar</h2>
          <p>A listing of SCCA Solo events within 5 hours of Baton Rouge</p>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major left">2020 Calendar</h2>
                <div class="">
                <div class="table-wrapper">
                  <table class="left lessBottom"> 
                    <thead>
                      <tr><th>Date</th><th>Region</th><th>Site</th><th>Link</th></tr>
                    </thead>
                    <tbody>                                          
                      <tr><td><b>03/08/20</b></td><td>CENLA</td><td>JESTC Evo Center</td><td><a href="http://msreg.com/september27th" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Sep 27 &nbsp;</a></td></tr>  
                      <tr><td><b>10/10/20</b></td><td>DELTA</td><td>Nola Motorsports Park</td><td><a href="https://delta-scca.org/aec_events/october-2020-delta-vs-world-autocross-event/" target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Oct 10 &nbsp;</a></td></tr>  
                      <tr><td><b>10/11/20</b></td><td>DELTA</td><td>Nola Motorsports Park</td><td><a href="https://delta-scca.org/aec_events/october-2020-delta-vs-world-autocross-event/" target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Oct 11 &nbsp;</a></td></tr>  
                     </tbody>
                  </table>
                  </div>       
                </div>                  
            </div>
          </div>
        </section>                           
      </section>
    </section>
    
  </Layout>
);

export default IndexPage;
