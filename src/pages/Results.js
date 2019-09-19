import React from 'react';

import Layout from '../components/Layout';
import May19 from '../assets/maps/small/May2019_Map_s.png';
import Apr19 from '../assets/maps/small/Apr2019_Map_s.png';
import Mar19 from '../assets/maps/small/Mar2019_Map_s.png';
import Feb19 from '../assets/maps/small/Feb2019_Map_s.png';
import Jan19 from '../assets/maps/small/Jan2019_Map_s.png';
import Dec18 from '../assets/maps/small/Dec2018_Map_s.png';
import Nov18 from '../assets/maps/Nov2018_Map.png';
import Oct18 from '../assets/maps/Oct2018_Map.png';
import Sep18 from '../assets/maps/Sep2018_Map.png';
import May18 from '../assets/maps/May2018_Map.png';
import Apr18 from '../assets/maps/Apr2018_Map.png';
import Mar18 from '../assets/maps/Mar2018_Map.png';


import May19L from '../assets/maps/May2019_Map.png';
// import May19L from '../assets/maps/May2019_Map.png';
// import Apr19L from '../assets/maps/April2019_Map.png';
// import Mar19L from '../assets/maps/March2019_Map.png';
// import Feb19L from '../assets/maps/Feb2019_Map.png';
const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Results</h2>
          <ul className="actions grid navGrid">
            <li><a href="#one" className="button button-light">2019 Fall</a></li>
            <li><a href="#two" className="button button-light">2018-2019 Season</a></li>
            <li><a href="#three" className="button button-light">2018 Spring Sprint</a></li>
            <li><a href="#four" className="button button-light">2017 Fall Sprint</a></li>       
					</ul>
        </div>
      </header>
      <section id="wrapper">


      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="content left">
              <h2 className="major">2019 Fall</h2>

<h4>TBA</h4>

              {/* <div class="grid left">
                <div class="grid-item">
  TBA


                </div></div> */}
          
        </div>
        </div>
      </section>


      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <div className="content left">
              <h2 className="major">2018-2019 Season</h2>
              <a href="http://cenla-scca.org/points/2018-19/2019pax.htm" class="button">Pax Results</a>  <a href="http://cenla-scca.org/points/2018-19/2019.htm" class="button">Class Results</a>
              <br></br>              <br></br>

              <h3>winners</h3>

              <h3>events</h3>
              <div class="grid">
                {/* Grid Item */}
                <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={May19} alt=""></img>
                    </div>
                  </a>
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
                {/* Grid Item */}
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
                {/* Grid Item */}
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
                    <img src={Feb19} alt=""></img>
                  </div>
                  <div class="results">
                    <div class="date">February 24, 2019</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">44.943</td>
                              <td class="car">3 SM</td>
                              <td class="driver">H. Bell</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">36.359</td>
                              <td class="car">178 ES</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">46.083</td>
                              <td class="car">178 ES</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">45.372</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">46.609</td>
                              <td class="car">90 ESP</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">46.287</td>
                              <td class="car">30 CAMS</td>
                              <td class="driver">A. Merkle</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">53.466</td>
                              <td class="car">1 XP</td>
                              <td class="driver">R. Duplessis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">44.943</td>
                              <td class="car">3 SM</td>
                              <td class="driver">H. Bell</td>
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
                {/* Grid Item */}
                <div class="grid-item">
                  <div class="map">
                    <img src={Jan19} alt=""></img>
                  </div>
                  <div class="results">
                    <div class="date">January 27, 2019</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">46.179</td>
                              <td class="car">90 ESP</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">38.327</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">47.579</td>
                              <td class="car">26 CS</td>
                              <td class="driver">J. Wanamaker</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">47.504</td>
                              <td class="car">7 STX</td>
                              <td class="driver">B. ODeay</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">46.179</td>
                              <td class="car">90 ESP</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">48.134</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">48.734</td>
                              <td class="car">14 XP</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">48.170</td>
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
                    <img src={Dec18} alt=""></img>
                  </div>
                  <div class="results">
                    <div class="date">December 2, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">35.594</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">29.293</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">37.433</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">35.594</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">37.721</td>
                              <td class="car">8 BSP</td>
                              <td class="driver">B. Pearce</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">37.226</td>
                              <td class="car">1 CAMT</td>
                              <td class="driver">D. Roddy</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">41.569</td>
                              <td class="car">1 XP</td>
                              <td class="driver">R. Duplessis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">36.301</td>
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
                {/* Grid Item */}
                <div class="grid-item">
                  <div class="map">
                    <img src={Nov18} alt=""></img>
                  </div>
                  <div class="results">
                    <div class="date">November 18, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">45.889</td>
                              <td class="car">3 SM</td>
                              <td class="driver">H. Bell</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">37.300</td>
                              <td class="car">9 GS</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">47.456</td>
                              <td class="car">9 GS</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">47.315</td>
                              <td class="car">7 STX</td>
                              <td class="driver">B. ODeay</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">49.070</td>
                              <td class="car">8 BSP</td>
                              <td class="driver">B. Pearce</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">47.944</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">47.284</td>
                              <td class="car">14 XP</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">45.889</td>
                              <td class="car">3 SM</td>
                              <td class="driver">H. Bell</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">51.918</td>
                              <td class="car">81 DM</td>
                              <td class="driver">G. Awbrey</td>
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


{/* Grid Item */}
                <div class="grid-item">
                  <div class="map">
                    <img src={Oct18} alt=""></img>
                  </div>
                  <div class="results">
                    <div class="date">October 27, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">35.594</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">29.293</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">37.433</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">35.594</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">37.721</td>
                              <td class="car">8 BSP</td>
                              <td class="driver">B. Pearce</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">37.226</td>
                              <td class="car">1 CAMT</td>
                              <td class="driver">D. Roddy</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">41.569</td>
                              <td class="car">1 XP</td>
                              <td class="driver">R. Duplessis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">36.301</td>
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



{/* Grid Item */}
                <div class="grid-item">
                  <div class="map">
                    <img src={Sep18} alt=""></img>
                  </div>
                  <div class="results">
                    <div class="date">September 9, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">35.594</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">29.293</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">37.433</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">35.594</td>
                              <td class="car">87 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">37.721</td>
                              <td class="car">8 BSP</td>
                              <td class="driver">B. Pearce</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">37.226</td>
                              <td class="car">1 CAMT</td>
                              <td class="driver">D. Roddy</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">41.569</td>
                              <td class="car">1 XP</td>
                              <td class="driver">R. Duplessis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">36.301</td>
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
                
              </div>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <div className="content left">
              <h2 className="major">2018 Spring Sprint</h2>
              <a href="http://cenla-scca.org/points/2018-19/2019pax.htm" class="button">Pax Results</a>  <a href="http://cenla-scca.org/points/2018-19/2019.htm" class="button">Class Results</a>
              <br></br>              <br></br>

              <h3>winners</h3>

              <h3>events</h3>
              <div class="grid left">
                {/* Grid Item */}
                <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={May18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">May 26, 2018</div>
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
                

 {/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Apr18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">April 26, 2018</div>
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
                


 {/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Mar18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">March 26, 2018</div>
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


{/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Mar18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">February 26, 2018</div>
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


{/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Mar18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">January 26, 2018</div>
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


                </div>
          </div>
        </div>
      </section>


      <section id="four" className="wrapper alt spotlight style4">
        <div className="inner">
          <div className="content left">
              <h2 className="major">2017 Fall Sprint</h2>
              <a href="http://cenla-scca.org/points/2017/fall/pax.htm" class="button">Pax Results</a>  <a href="http://cenla-scca.org/points/2017/fall/points.htm" class="button">Class Results</a>
              <br></br>              <br></br>

              <h3>winners</h3>

              <h3>events</h3>
              <div class="grid left">
                {/* Grid Item */}
                <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={May18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">May 26, 2018</div>
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
                

 {/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Apr18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">April 26, 2018</div>
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
                


 {/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Mar18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">March 26, 2018</div>
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



{/* Grid Item */}
 <div class="grid-item">
                  <a href={May19L}>
                    <div class="map">
                    <img src={Mar18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">January 26, 2018</div>
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


                </div>
          </div>
        </div>
      </section>


      </section>
    </section>
  </Layout>
);

export default IndexPage;
