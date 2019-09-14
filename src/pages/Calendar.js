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
              <h2 className="major left">2019 Calendar</h2>
              
                <div class="">
                <div class="table-wrapper">
                  <table class="left lessBottom"> 
                    <thead>
                      <tr><th>Date</th><th>Region</th><th>Site</th><th>Link</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><b>09/22/19</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="http://msreg.com/september2019" class="breakme">http://msreg.com/september019</a></td></tr>
                      <tr><td><b>09/28/19</b></td><td>MSS</td><td>Grenada Airport</td><td><a href="http://msreg.com/GrenadaSeptAutox" class="breakme">http://msreg.com/GrenadaSeptAutox</a></td></tr>
                      <tr><td><b>09/29/19</b></td><td>MSS</td><td>Grenada Airport</td><td><a href="http://msreg.com/GrenadaSeptAutox" class="breakme">http://msreg.com/GrenadaSeptAutox</a></td></tr>
                      <tr><td><b>10/5/19</b></td><td>HOUSTON</td><td>Houston Police Academy (Rookie School)</td><td><a href="https://www.dlbracing.com/Event/7059" class="breakme">https://www.dlbracing.com/Event/7059</a></td></tr>
                      <tr><td><b>10/6/19</b></td><td>HOUSTON</td><td>Houston Police Academy</td><td><a href="https://www.dlbracing.com/Event/7055" class="breakme">https://www.dlbracing.com/Event/7055</a></td></tr>
                      <tr><td><b>10/6/19</b></td><td>RED RIVER</td><td>Ike Hamilton Expo Center</td><td>TBA</td></tr>
                      <tr><td><b>10/12/19</b></td><td>DELTA</td><td>Nola Motorsports</td><td><a href="https://www.dlbracing.com/Event/7068" class="breakme">https://www.dlbracing.com/Event/7068</a></td></tr>
                      <tr><td><b>10/13/19</b></td><td>DELTA</td><td>Nola Motorsports</td><td><a href="https://www.dlbracing.com/Event/7068" class="breakme">https://www.dlbracing.com/Event/7068</a></td></tr>
                      <tr><td><b>10/20/19</b></td><td>RED RIVER</td><td>Ike Hamilton Expo Center</td><td>TBA</td></tr>                      
                      <tr><td><b>10/22/19</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td><a href="http://msreg.com/october2019" class="breakme">http://msreg.com/october2019</a></td></tr>                      
                      <tr><td><b>11/19</b></td><td>CENLA</td><td>TBA</td><td>TBA</td></tr>
                      <tr><td><b>11/02/19</b></td><td>HOUSTON</td><td>Houston Police Academy</td><td><a href="https://www.dlbracing.com/Event/7056">https://www.dlbracing.com/Event/7056</a></td></tr>
                      <tr><td><b>11/03/19</b></td><td>HOUSTON</td><td>Houston Police Academy</td><td><a href="https://www.dlbracing.com/Event/7057">https://www.dlbracing.com/Event/7057</a></td></tr>
                      <tr><td><b>11/10/19</b></td><td>DELTA</td><td>Nola Motorsports</td><td>TBA</td></tr>
                      <tr><td><b>11/16/19</b></td><td>RED RIVER</td><td>Ike Hamilton Expo Center</td><td>TBA</td></tr>
                      <tr><td><b>11/17/19</b></td><td>RED RIVER</td><td>Ike Hamilton Expo Center</td><td>TBA</td></tr>                      
                      <tr><td><b>12/01/19</b></td><td>DELTA</td><td>Nola Motorsports</td><td>TBA</td></tr>
                      <tr><td><b>12/08/19</b></td><td>HOUSTON</td><td>Grandsport Speedway,</td><td>TBA</td></tr>                      
                      <tr><td><b>12/15/19</b></td><td>CENLA</td><td>Lamar-Dixon Expo Center</td><td>TBA</td></tr>
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
