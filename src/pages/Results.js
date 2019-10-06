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
import Feb18 from '../assets/maps/Feb2018_Map.png';
import Jan18 from '../assets/maps/Jan2018_Map.png';

import Dec17 from '../assets/maps/Dec2017_Map.png';
import Nov17 from '../assets/maps/Nov2017_Map.png';
import Oct17 from '../assets/maps/Oct2017_Map.png';
import Sep17 from '../assets/maps/Sep2017_Map.png';

import May19L from '../assets/maps/May2019_Map.png';
// import May19L from '../assets/maps/May2019_Map.png';
import Apr19L from '../assets/maps/April2019_Map.jpg';
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


      <section id="two" className="wrapper alt spotlight style2 ">
        <div className="inner">
          <div className="content left winnersection">
              <h2 className="major">2018-2019 Season</h2>
              <a href="http://cenla-scca.org/points/2018-19/2019pax.htm" class="button fit" target="_blank" rel="noopener noreferrer">Pax Results</a><br></br>  
              <a href="http://cenla-scca.org/points/2018-19/2019.htm" class="button fit" target="_blank" rel="noopener noreferrer">Class Results</a>
              <br></br>              <br></br>

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
                      <a href="http://www.cenla-scca.org/results/2019/5-26/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/5-26/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/5-26/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/5-26/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Apr19L}>                  
                  <div class="map">
                    <img src={Apr19} alt=""></img>
                  </div>
                  </a>
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
                      <a href="http://www.cenla-scca.org/results/2019/4-28/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/4-28/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/4-28/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/4-28/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/wp-content/uploads/2019/04/march-31st_fin.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/wp-content/uploads/2019/04/march-31st_raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/wp-content/uploads/2019/04/march-31st_pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/wp-content/uploads/2019/04/march-31st_sum.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/2-24/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/2-24/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/2-24/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/2-24/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/1-27/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/1-27/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2019/1-27/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/12-2/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/12-2/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/12-2/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/12-2/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/12-2/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/11-18/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/11-18/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/11-18/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/11-18/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                              <td class="best">31.348</td>
                              <td class="car">9 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">27.580</td>
                              <td class="car">9 GS</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">35.089</td>
                              <td class="car">9 GS</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">34.538</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">38.882</td>
                              <td class="car">455 DSP</td>
                              <td class="driver">C. Madere</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">35.520</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.600</td>
                              <td class="car">77 DP</td>
                              <td class="driver">R. McKinney</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">34.250</td>
                              <td class="car">3 SM</td>
                              <td class="driver">H. Bell</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">37.994</td>
                              <td class="car">81 DM</td>
                              <td class="driver">A. Gregory</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Kart</b></td>
                              <td class="best">31.348</td>
                              <td class="car">9 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>                                                        
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/10-27/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/10-27/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/10-27/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/10-27/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                              <td class="best">42.202</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">34.732</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">43.645</td>
                              <td class="car">26 CS</td>
                              <td class="driver">J. Wanamaker</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">42.202</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">50.447</td>
                              <td class="car">86 DSP</td>
                              <td class="driver">M. Trinh</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">43.794</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">53.041</td>
                              <td class="car">1 XP</td>
                              <td class="driver">R. Duplessis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">42.575</td>
                              <td class="car">3 SM</td>
                              <td class="driver">H. Bell</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">44.121</td>
                              <td class="car">1   CM</td>
                              <td class="driver">E. Kimbrough</td>
                            </tr>                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/9-9/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/9-9/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/9-9/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/9-9/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
          <div className="content left winnersection">
              <h2 className="major">2018 Spring Sprint</h2>
              <a href="http://cenla-scca.org/points/2018/spring/pax.htm" class="button fit" target="_blank" rel="noopener noreferrer">Pax Results</a>
              <a href="http://cenla-scca.org/points/2018/spring/points.htm" class="button fit" target="_blank" rel="noopener noreferrer">Class Results</a>
              <br></br>              <br></br>

              <h3>events</h3>
              <div class="grid">
                {/* Grid Item */}
                <div class="grid-item">
                  <a href={May18}>
                    <div class="map">
                    <img src={May18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">May 20, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">41.135</td>
                              <td class="car">32 SSM</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">34.423</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">43.796</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">43.496</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">43.881</td>
                              <td class="car">12 DSP</td>
                              <td class="driver">B. Guilliams</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">43.502</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">42.512</td>
                              <td class="car">14 XP</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.135</td>
                              <td class="car">32 SSM</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">44.520</td>
                              <td class="car">1 CM</td>
                              <td class="driver">E. Kimbrough</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/5-20/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/5-20/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/5-20/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/5-20/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Apr18}>
                    <div class="map">
                    <img src={Apr18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">April 21, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">46.707</td>
                              <td class="car">32 SSM</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">37.433</td>
                              <td class="car">51 GS</td>
                              <td class="driver">M. Holmes</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">48.915</td>
                              <td class="car">26 CS</td>
                              <td class="driver">J. Wanamaker</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">46.735</td>
                              <td class="car">9 STH</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">47.933</td>
                              <td class="car">8 BSP</td>
                              <td class="driver">B. Pearce</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">48.443</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">46.819</td>
                              <td class="car">41 XP</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">46.707</td>
                              <td class="car">32 SSM</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">58.448</td>
                              <td class="car">2 FM</td>
                              <td class="driver">B. Duplessis</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/4-21/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/4-21/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/4-21/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/4-21/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Mar18}>
                    <div class="map">
                    <img src={Mar18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">March 4, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">189.510</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">155.966</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">203.896</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">189.510</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">223.112</td>
                              <td class="car">41 XP</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">195.737</td>
                              <td class="car">3 CAMC</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">223.112</td>
                              <td class="car">41 XP</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">193.882</td>
                              <td class="car">32 SSM</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">200.918</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Kart</b></td>
                              <td class="best">262.964</td>
                              <td class="car">88 KM</td>
                              <td class="driver">N. Rossi</td>
                            </tr>                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/3-4/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/3-4/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/3-4/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/3-4/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Feb18}>
                    <div class="map">
                    <img src={Feb18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">February 18, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">49.320</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">40.200</td>
                              <td class="car">9 STH</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">51.513</td>
                              <td class="car">21 SS</td>
                              <td class="driver">S. Lawrence</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">49.320</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">52.121</td>
                              <td class="car">3 ASP</td>
                              <td class="driver">T. Mallete</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">50.343</td>
                              <td class="car">66 CAMS</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">55.996</td>
                              <td class="car">76 FP</td>
                              <td class="driver">J. Smith</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">49.511</td>
                              <td class="car">32 SSM</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">50.245</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/2-18/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/2-18/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/2-18/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/2-18/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Jan18}>
                    <div class="map">
                    <img src={Jan18} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">January 14, 2018</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">54.951</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">46.328</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">58.348</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">56.956</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">58.363</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">58.275</td>
                              <td class="car">3 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">67.768</td>
                              <td class="car">13 XP</td>
                              <td class="driver">M. Wainwright</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">56.453</td>
                              <td class="car">42 SM</td>
                              <td class="driver">J. Evanco</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">54.951</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2018/1-14/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/1-14/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/1-14/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2018/1-14/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
          <div className="content left winnersection">
              <h2 className="major">2017 Fall Sprint</h2>
              <a href="http://cenla-scca.org/points/2017/fall/pax.htm" class="button fit" target="_blank" rel="noopener noreferrer">Pax Results</a>
              <a href="http://cenla-scca.org/points/2017/fall/points.htm" class="button fit" target="_blank" rel="noopener noreferrer">Class Results</a>
              <br></br>              <br></br>

              <h3>events</h3>
              <div class="grid">
                {/* Grid Item */}
                <div class="grid-item">
                  <a href={Dec17}>
                    <div class="map">
                    <img src={Dec17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">Dec 3, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">47.057</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">38.516</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">48.085</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">47.268</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">49.514</td>
                              <td class="car">6 ASP</td>
                              <td class="driver">T. Mallete</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">48.429</td>
                              <td class="car">66 CAM</td>
                              <td class="driver">B. Broussard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">48.481</td>
                              <td class="car">113 XP</td>
                              <td class="driver">E. Williams</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">48.442</td>
                              <td class="car">9 SM</td>
                              <td class="driver">H. Bell</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">47.057</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/12-3/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/12-3/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/12-3/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/12-3/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Nov17}>
                    <div class="map">
                    <img src={Nov17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">November 5, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">32.317</td>
                              <td class="car">9 STX</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">41.095</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">39.067</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">41.573</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">44.555</td>
                              <td class="car">11 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.339</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.506</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/11-5/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/11-5/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/11-5/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/11-5/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Oct17}>
                    <div class="map">
                    <img src={Oct17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">October 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.174</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">28.632</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">35.746</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">34.651</td>
                              <td class="car">97 STR</td>
                              <td class="driver">K. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">35.984</td>
                              <td class="car">241 SSP</td>
                              <td class="driver">C. Moesley</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">37.162</td>
                              <td class="car">41 CAM</td>
                              <td class="driver">C. Kluczkowski</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">35.793</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">37.819</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">35.405</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Kart</b></td>
                              <td class="best">32.089</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/10-4/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/10-4/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/10-4/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/10-4/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Sep17}>
                    <div class="map">
                    <img src={Sep17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">September 17, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">45.606</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">37.532</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">46.857</td>
                              <td class="car">90 DS</td>
                              <td class="driver">Z. Lemoine</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">46.209</td>
                              <td class="car">97 STR</td>
                              <td class="driver">C. Coughlin</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">46.239</td>
                              <td class="car">0 BSP</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">46.628</td>
                              <td class="car">13 CAMS</td>
                              <td class="driver">A. Merkle</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">45.733</td>
                              <td class="car">44 DP</td>
                              <td class="driver">J. Jumonville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">48.191</td>
                              <td class="car">12 SSM</td>
                              <td class="driver">J. Aguillard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">45.606</td>
                              <td class="car">2 CM</td>
                              <td class="driver">B. Fitzgerald</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/9-17/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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

      <section id="three" className="wrapper spotlight style5">
        <div className="inner">
          <div className="content left winnersection">
              <h2 className="major">2017</h2>

              <div class="grid">

{/* Grid Item */}
              <div class="grid-item">
                  <a href={Sep17}>
                    <div class="map">
                    <img src={Sep17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">May 13, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">32.317</td>
                              <td class="car">9 STX</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">41.095</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">39.067</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">41.573</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">44.555</td>
                              <td class="car">11 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.339</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.506</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/5-13/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Sep17}>
                    <div class="map">
                    <img src={Sep17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">April 13, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">32.317</td>
                              <td class="car">9 STX</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">41.095</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">39.067</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">41.573</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">44.555</td>
                              <td class="car">11 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.339</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.506</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/5-13/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Sep17}>
                    <div class="map">
                    <img src={Sep17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">March 13, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">32.317</td>
                              <td class="car">9 STX</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">41.095</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">39.067</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">41.573</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">44.555</td>
                              <td class="car">11 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.339</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.506</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/5-13/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Sep17}>
                    <div class="map">
                    <img src={Sep17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">February 13, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">32.317</td>
                              <td class="car">9 STX</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">41.095</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">39.067</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">41.573</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">44.555</td>
                              <td class="car">11 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.339</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.506</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/5-13/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                  <a href={Sep17}>
                    <div class="map">
                    <img src={Sep17} alt=""></img>
                    </div>
                  </a>
                  <div class="results">
                    <div class="date">January 13, 2017</div>
                    <div class="winners">
                      <div class="table-wrapper">
                        <table class="eventWinners">
                          <tbody>
                            <tr>
                              <td class="category"><b>Raw</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Pax</b></td>
                              <td class="best">32.317</td>
                              <td class="car">9 STX</td>
                              <td class="driver">M. Bales</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street</b></td>
                              <td class="best">41.095</td>
                              <td class="car">17 GS</td>
                              <td class="driver">C. Wooster</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Touring</b></td>
                              <td class="best">39.067</td>
                              <td class="car">0 STR</td>
                              <td class="driver">W. Burk</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Prepared</b></td>
                              <td class="best">41.573</td>
                              <td class="car">24 CSP</td>
                              <td class="driver">K. Duplantis</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Classic American</b></td>
                              <td class="best">44.555</td>
                              <td class="car">11 CAM</td>
                              <td class="driver">T. Neuville</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Prepared</b></td>
                              <td class="best">38.339</td>
                              <td class="car">32 XP</td>
                              <td class="driver">C. Meaux</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Street Modified</b></td>
                              <td class="best">41.506</td>
                              <td class="car">10 SMF</td>
                              <td class="driver">L. Villemarette</td>
                            </tr>
                            <tr>
                              <td class="category"><b>Modified</b></td>
                              <td class="best">34.988</td>
                              <td class="car">99 KM</td>
                              <td class="driver">J. Ricard</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="categories">
                      <a href="http://www.cenla-scca.org/results/2017/5-13/final.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/raw.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/pax.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
                      <a href="http://www.cenla-scca.org/results/2017/9-17/summary.htm" class="resultRing" target="_blank" rel="noopener noreferrer">
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
