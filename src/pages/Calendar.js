import React from 'react';

import Layout from '../components/Layout';


const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Calendar</h2>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major left">2023 Calendar</h2>
                <div class="">
                <div class="table-wrapper">
                  <table class="left lessBottom"> 
                    <thead>
                      <tr><th>Date</th><th>Region</th><th>Site</th><th>Link</th></tr>
                    </thead>
                    <tbody>                                          
                      <tr><td><b>2/19/23</b></td><td>CENLA</td><td>JESTC EVOC</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Feb 19 &nbsp;</a></td></tr>  
                      <tr><td><b>3/19/23</b></td><td>CENLA</td><td>JESTC EVOC</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Mar 19 &nbsp;</a></td></tr>  
                      <tr><td><b>4/30/23</b></td><td>CENLA</td><td>Lamar-Dixon</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Apr 19 &nbsp;</a></td></tr>  
                      <tr><td><b>5/14/23</b></td><td>CENLA</td><td>Lamar-Dixon</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; May 19 &nbsp;</a></td></tr>  
                      <tr><td><b>9/24/23</b></td><td>CENLA</td><td>Lamar-Dixon</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Sep 19 &nbsp;</a></td></tr>  
                      <tr><td><b>10/22/23</b></td><td>CENLA</td><td>Lamar-Dixon</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Oct 19 &nbsp;</a></td></tr>  
                      <tr><td><b>11/19/23</b></td><td>CENLA</td><td>Lamar-Dixon</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Nov 19 &nbsp;</a></td></tr>  
                      <tr><td><b>12/17/23</b></td><td>CENLA</td><td>JESTC EVOC</td><td><a href="https://www.motorsportreg.com/orgs/scca/central-louisiana" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Dec 19 &nbsp;</a></td></tr>  

                     
                     
                     
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
