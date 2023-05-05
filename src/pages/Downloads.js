import React from 'react';
import Layout from '../components/Layout';

import ldnogrid from '../assets/images/LamarDixonTemplateNoGrid.jpg';
import ldgrid from '../assets/images/LamarDixonTemplate10ftGrid.jpg';
import fourhnogrid from '../assets/images/LamarDixon4hTemplateNoGrid.jpg';
import fourhgrid from '../assets/images/LamarDixon4hTemplate10ftGrid.jpg';
import evocgrid from '../assets/images/EVOC10ftgrid_2023.jpg';
import evocgrid2 from '../assets/images/EVOC10ftgrid_2023_s.jpg';
/*import evocnogrid from '../assets/images/EVOCNoGridLight.jpg';*/

import fullLogoColor from '../assets/images/CENLAFullTextColor.png';
import fullLogoWhite from '../assets/images/CENLAFullText.png';
import altLogo from '../assets/images/CENLASmallText.png';
import plainLogoColor from'../assets/images/CENLANoTextColor.png';
import plainLogo from'../assets/images/CENLANoText.png';
import eventThumb from'../assets/images/CENLAEventThumb.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Downloads</h2>
          <ul className="actions grid navGrid">
            <li><a href="#spectators" className="button button-light">Maps</a></li>
            <li><a href="#rides" className="button button-light">Logos</a></li>
            <li><a href="#photos" className="button button-light">Forms</a></li>           
		  </ul>        
        </div>
      </header>
      <section id="wrapper">
      <section id="spectators" className="wrapper lightbg style2">
        <div className="inner">
          <div className="content left">
              <h2 className="major left">Course Templates</h2>
              <h3>Course templates are available here. </h3>
                <p class="left">Please submit course submissions to a CENLA board member via facebook messenger or email. All submissions will be brought before the CENLA Board of Directors for suggestions, safety edits, and approvals. </p> 
                <div className="box alt">
							<div className="row gtr-uniform">
								<div className="col-4"><span className="image fit"><a href={ldnogrid}><img src={ldnogrid} alt="-" /></a>
                                    <span><b>Lamar-Dixon</b></span>
                                    <p><a href={ldnogrid} class="button icon fa-download">JPG</a> <a href='/psd/LamarDixonNoGrid.psd' class="button icon fa-download">PSD</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={ldgrid}><img src={ldgrid} alt="-" /></a>
                                    <span><b>Lamar-Dixon w/ 10ft Grid</b></span>
                                    <p><a href={ldgrid} class="button icon fa-download">JPG</a> <a href='/psd/LamarDixon10ftGrid.psd' class="button icon fa-download">PSD</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={fourhnogrid}><img src={fourhnogrid} alt="-" /></a>
                                    <span><b>Lamar-Dixon 4H Lot</b></span>
                                    <p><a href={fourhnogrid} class="button icon fa-download">JPG</a> <a href="/psd/LamarDixon4hNoGrid.psd" class="button icon fa-download">PSD</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={fourhgrid}><img src={fourhgrid} alt="-" /></a>
                                    <span><b>Lamar-Dixon 4H Lot w/ 10ft Grid</b></span>
                                    <p><a href={fourhgrid} class="button icon fa-download">JPG</a> <a href="/psd/LamarDixon4h10ftGrid.psd" class="button icon fa-download">PSD</a></p>
                                </span></div>
{/* 
								<div className="col-4"><span className="image fit"><a href={evocnogrid}><img src={evocnogrid} alt="-" /></a>
                                    <span><b>EVOC</b></span>
                                    <p><a href={evocnogrid} class="button icon fa-download">JPG</a> <a href="/psd/EVOCNoGridLight.psd" class="button icon fa-download">PSD</a></p>
                                </span></div> */}

								<div className="col-4"><span className="image fit"><a href={evocgrid}><img src={evocgrid2} alt="-" /></a>
                                    <span><b>EVOC w/ 10ft Grid</b></span>
                                    <p><a href={evocgrid} class="button icon fa-download">JPG</a> <a href="/psd/EVOC10ftgrid_2023.psd" class="button icon fa-download">PSD</a></p>
                                </span></div>

							</div>
						</div>         
          </div>
        </div>
      </section>
      <section id="rides" className="wrapper lightbg alt style3">
        <div className="inner">
          <div className="content">
              <h2 className="major left">Logos</h2>
              <div className="box alt">
							<div className="row gtr-uniform">
								<div className="col-4"><span className="image fit"><a href={fullLogoColor}><img src={fullLogoColor} alt="-" /></a>
                                    <span><b>CENLA Full Logo Color</b></span>
                                    <p><a href={fullLogoColor} class="button icon fa-download">PNG</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={fullLogoWhite}><img src={fullLogoWhite} alt="-" /></a>
                                    <span><b>CENLA Full Logo Monochrome</b></span>
                                    <p><a href={fullLogoWhite} class="button icon fa-download">PNG</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={altLogo}><img src={altLogo} alt="-" /></a>
                                    <span><b>CENLA Alternate Logo</b></span>
                                    <p><a href={altLogo} class="button icon fa-download">PNG</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={plainLogoColor}><img src={plainLogoColor} alt="-" /></a>
                                    <span><b>CENLA Plain Logo Color</b></span>
                                    <p><a href={plainLogoColor} class="button icon fa-download">PNG</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href={plainLogo}><img src={plainLogo} alt="-" /></a>
                                    <span><b>CENLA Plain Logo</b></span>
                                    <p><a href={plainLogo} class="button icon fa-download">PNG</a></p>
                                </span></div>

								<div className="col-4"><span className="image fit"><a href="/psd/EventBanner.psd"><img src={eventThumb} alt="-" /></a>
                                    <span><b>Event Banner Template PSD</b></span>
                                    <p><a href="/psd/EventBanner.psd" class="button icon fa-download">PSD</a></p>
                                </span></div>

							</div>
						</div>   
          </div>
        </div>
      </section>     
      <section id="photos" className="wrapper lightbg style5">
        <div className="inner">
          <div className="content left">
              <h2 className="major left">Forms</h2>

                  <span> All forms can be found on the <u><a href="https://www.scca.com/downloads" target="_blank" rel="noopener noreferrer" >official SCCA forms</a></u> webpage</span>
<br></br><br></br><br></br>
          </div>
        </div>
      </section>          
      </section>
    </section>
  </Layout>
);

export default IndexPage;
