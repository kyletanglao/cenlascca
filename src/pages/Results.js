import React from 'react';

import Layout from '../components/Layout';
import May19 from '../assets/maps/small/May2019_Map_s.png';
import Apr19 from '../assets/maps/small/April2019_Map_s.png';
import Mar19 from '../assets/maps/small/March2019_Map_s.png';

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
          <div className="content left">
              <h2 className="major">2018-2019 Season</h2>
              <a href="http://cenla-scca.org/points/2018-19/2019pax.htm" class="button">Pax Results</a>  <a href="http://cenla-scca.org/points/2018-19/2019.htm" class="button">Class Results</a>
              <br></br>              <br></br>

              <h3>winners</h3>

              <h3>events</h3>
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
                      <a href="" class="resultRing">
                        <div class="ring">
                          <div class="static-ring"></div>
                          <div class="lds-ring">
                            <div class="ringText">Final</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </a>
                      <a href="" class="resultRing">
                        <div class="ring">
                          <div class="static-ring"></div>
                          <div class="lds-ring">
                            <div class="ringText">Raw</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </a>
                      <a href="" class="resultRing">
                        <div class="ring">
                          <div class="static-ring"></div>
                          <div class="lds-ring">
                            <div class="ringText">Pax</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </a>
                      <a href="" class="resultRing">
                        <div class="ring">
                          <div class="static-ring"></div>
                          <div class="lds-ring shape">
                            <div class="ringText">Class</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

<div class="grid-item">
  <div class="map">
    <img src={Apr19} alt=""></img>
  </div>
  <div class="results">
    <div class="date">April 28, 2019</div>
    <div class="winners">
      <div class="table-wrapper">
        <table class="eventWinners">
          <tbody>
            <tr>
              <td class="category"><b>Raw</b></td>
              <td class="best">33.821</td>
              <td class="car">1 FP</td>
              <td class="driver">K. Coughlin</td>
            </tr>
            <tr>
              <td class="category"><b>Pax</b></td>
              <td class="best">29.168</td>
              <td class="car">166 CAMS</td>
              <td class="driver">Z. Lemoine</td>
            </tr>
            <tr>
              <td class="category"><b>Street</b></td>
              <td class="best">37.083</td>
              <td class="car">51 GS</td>
              <td class="driver">M. Holmes</td>
            </tr>
            <tr>
              <td class="category"><b>Touring</b></td>
              <td class="best">36.288</td>
              <td class="car">181 STR</td>
              <td class="driver">K. Tanglao</td>
            </tr>
            <tr>
              <td class="category"><b>Street Prepared</b></td>
              <td class="best">48.420</td>
              <td class="car">44 FSP</td>
              <td class="driver">J. Jumonville</td>
            </tr>
            <tr>
              <td class="category"><b>Classic American</b></td>
              <td class="best">35.016</td>
              <td class="car">166 CAMS</td>
              <td class="driver">Z.Lemoine</td>
            </tr>
            <tr>
              <td class="category"><b>Prepared</b></td>
              <td class="best">33.821</td>
              <td class="car">187 FP</td>
              <td class="driver">K. Coughlin</td>
            </tr>
            <tr>
              <td class="category"><b>Street Modified</b></td>
              <td class="best">35.165</td>
              <td class="car">32 SSM</td>
              <td class="driver">C. Meaux</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div class="categories">
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring">
            <div class="ringText">Final</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring">
            <div class="ringText">Raw</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring">
            <div class="ringText">Pax</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring shape">
            <div class="ringText">Class</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>


<div class="grid-item">
  <div class="map">
    <img src={Mar19} alt=""></img>
  </div>
  <div class="results">
    <div class="date">March 31, 2019</div>
    <div class="winners">
      <div class="table-wrapper">
        <table class="eventWinners">
          <tbody>
            <tr>
              <td class="category"><b>Raw</b></td>
              <td class="best">42.330</td>
              <td class="car">24 STH</td>
              <td class="driver">K. Duplantis</td>
            </tr>
            <tr>
              <td class="category"><b>Pax</b></td>
              <td class="best">34.414</td>
              <td class="car">24 STH</td>
              <td class="driver">K. Duplantis</td>
            </tr>
            <tr>
              <td class="category"><b>Street</b></td>
              <td class="best">43.856</td>
              <td class="car">50 FS</td>
              <td class="driver">L. Green</td>
            </tr>
            <tr>
              <td class="category"><b>Touring</b></td>
              <td class="best">34.414</td>
              <td class="car">24 STH</td>
              <td class="driver">K. Duplantis</td>
            </tr>
            <tr>
              <td class="category"><b>Street Prepared</b></td>
              <td class="best">50.164</td>
              <td class="car">44 FSP</td>
              <td class="driver">J. Jumonville</td>
            </tr>
            <tr>
              <td class="category"><b>Classic American</b></td>
              <td class="best">45.763</td>
              <td class="car">1 CAMT</td>
              <td class="driver">D. Roddy</td>
            </tr>
            <tr>
              <td class="category"><b>Prepared</b></td>
              <td class="best">51.122</td>
              <td class="car">1 XP</td>
              <td class="driver">R. Duplessis</td>
            </tr>
            <tr>
              <td class="category"><b>Street Modified</b></td>
              <td class="best">42.424</td>
              <td class="car">42 SM</td>
              <td class="driver">C. Evanco</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div class="categories">
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring">
            <div class="ringText">Final</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring">
            <div class="ringText">Raw</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring">
            <div class="ringText">Pax</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
      <a href="" class="resultRing">
        <div class="ring">
          <div class="static-ring"></div>
          <div class="lds-ring shape">
            <div class="ringText">Class</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
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
