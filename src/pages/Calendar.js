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
                      <tr><td><b>01/19/20</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="http://msreg.com/january19" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Jan 19 &nbsp;</a></td></tr>  
                      <tr><td><b>02/02/20</b></td><td>DELTA</td><td>Nola Motorsports Park</td><td><a target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Feb 2 &nbsp;</a></td></tr>  
                      <tr><td><b>02/09/20</b></td><td>HOUSCCA</td><td>Gulf Greyhound Park</td><td><a href="http://msreg.com/HOUSCCA-2020-2" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Feb 9 &nbsp;</a></td></tr>  
                      <tr><td><b>02/23/20</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="http://msreg.com/february23"target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Feb 23 &nbsp;</a></td></tr>  
                      <tr><td><b>03/07/20</b></td><td>HOUSCCA</td><td>Houston Police Academy</td><td><a href="http://msreg.com/HOUSCCA-2020-3" target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Mar 7 &nbsp;</a></td></tr>  
                      <tr><td><b>03/08/20</b></td><td>DELTA</td><td>Nola Motorsports Park</td><td><a target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Mar 8 &nbsp;</a></td></tr>  
                      <tr><td><b>03/17/20</b></td><td>RED RIVER</td><td>Ike Hamilton Expo Center</td><td><a target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Mar 17 &nbsp;</a></td></tr>
                      <tr><td><b>03/29/20</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="http://msreg.com/march29th"target="_blank" rel="noopener noreferrer" className="button fit">&nbsp; Mar 29 &nbsp;</a></td></tr>  
                      <tr><td><b>04/04/20</b></td><td>MISSISSIPPI</td><td>Grenada Airport</td><td><a target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Apr 4 &nbsp;</a></td></tr>  
                      <tr><td><b>04/05/20</b></td><td>MISSISSIPPI</td><td>Grenada Airport</td><td><a target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Apr 5 &nbsp;</a></td></tr>  
                      <tr><td><b>04/05/20</b></td><td>DELTA</td><td>Nola Motorsports Park</td><td><a target="_blank" rel="noopener noreferrer" className="button disabled fit">&nbsp; Apr 5 &nbsp;</a></td></tr>  
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
