import React from 'react';

import Layout from '../components/Layout';
import May19 from '../assets/maps/May2019_Map.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Results</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>
      <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">

        <div className="inner">
          <div className="content">
              <h2 className="major left">2018-2019 Season</h2>
              <div class="grid">
              <div class="grid-item">
                <div class="map">
                  <img src={May19} alt=""></img>
                </div>
                <div class="results">
                  <div class="date">May 26, 2019</div>
                  <div class="winners">
                  <div class="table-wrapper">
                    <table class="eventWinners">
                      <tbody>
                        <tr>
                          <td class="category"><b>Raw</b></td>
                          <td class="best">40.842</td>
                          <td class="car">187 FP</td>
                          <td class="driver">K. Coughlin</td>
                        </tr>
                        <tr>
                          <td class="category"><b>Pax</b></td>
                          <td class="best">34.081</td>
                          <td class="car">9 GS</td>
                          <td class="driver">M. Bales</td>
                        </tr>
                        <tr>
                          <td class="category"><b>Street</b></td>
                          <td class="best">34.081</td>
                          <td class="car">9 GS</td>
                          <td class="driver">M. Bales</td>
                        </tr>        
                        <tr>
                          <td class="category"><b>Touring</b></td>
                          <td class="best">42.630</td>
                          <td class="car">181 STR</td>
                          <td class="driver">K. Tanglao</td>
                        </tr>     
                        <tr>
                          <td class="category"><b>Street Prepared</b></td>
                          <td class="best">45.325</td>
                          <td class="car">44 FSP</td>
                          <td class="driver">J. Jumonville</td>
                        </tr>   
                        <tr>
                          <td class="category"><b>Classic American</b></td>
                          <td class="best">44.555</td>
                          <td class="car">2 CAMC</td>
                          <td class="driver">J. King</td>
                        </tr>        
                        <tr>
                          <td class="category"><b>Prepared</b></td>
                          <td class="best">40.842</td>
                          <td class="car">187 FP</td>
                          <td class="driver">K. Coughlin</td>
                        </tr>       
                        <tr>
                          <td class="category"><b>Street Modified</b></td>
                          <td class="best">41.537</td>
                          <td class="car">3 SM</td>
                          <td class="driver">H. Bell</td>
                        </tr>         
                        <tr>
                          <td class="category"><b>Modified</b></td>
                          <td class="best">47.233</td>
                          <td class="car">247 DM</td>
                          <td class="driver">D. Yoes</td>
                        </tr>                                                                                                                                                    
                        </tbody>
                    </table>
                  </div>
                  </div>
                  <div class="categories">
                    <div class="speedo">
                      <div class="circle"></div>
                      <div class="text">Final</div>
                    </div>
                    <div class="speedo">
                      <div class="circle"></div>
                      <div class="text">Raw</div>
                    </div>               
                    <div class="speedo">
                      <div class="circle"></div>
                      <div class="text">Pax</div>
                    </div>    
                    <div class="speedo">
                      <div class="circle"></div>
                      <div class="text">Class</div>
                    </div>                                               
                  </div>
                </div>
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
