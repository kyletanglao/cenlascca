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
                      <tr><td><b>01/31/21</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Jan 31 &nbsp;</a></td></tr>  
                      <tr><td><b>02/28/21</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Feb 28 &nbsp;</a></td></tr>  
                      <tr><td><b>03/28/21</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Mar 28 &nbsp;</a></td></tr>  
                      <tr><td><b>04/25/21</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Apr 25 &nbsp;</a></td></tr>  
                      <tr><td><b>05/30/21</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; May 30 &nbsp;</a></td></tr>  


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
