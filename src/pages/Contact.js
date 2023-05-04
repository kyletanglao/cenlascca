import React from 'react';
import Layout from '../components/Layout';
const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Contact Us</h2>
          <p>Email one of your beloved CENLA SCCA board members</p>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major left">Directory</h2>
                <div class="">
                <div class="table-wrapper">
                  <table class="left lessBottom"> 
                    <thead>
                      <tr><th>Role</th><th>Name</th><th>Email</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><b>Regional Executive</b></td><td>Mike Blazek</td><td>mblazek@bellsouth.net</td></tr>
                      <tr><td><b>Assistant Regional Executive</b></td><td>Chris Evanco</td><td class="breakme">jcevanco@gmail.com</td></tr>                      
                      <tr><td><b>Secretary</b></td><td>Julie Martin</td><td class="breakme">projectoctane@gmail.com</td></tr>
                      <tr><td><b>Treasurer</b></td><td>Jeff Hoffmann</td><td class="breakme">jeffkh@aol.com</td></tr>                 
                      <tr><td><b>Member at large</b></td><td>Michael Holmes (Jimmy Radiator)</td><td class="breakme">holmesbr2@gmail.com</td></tr>
                      <tr><td><b>Member at large</b></td><td>Quinlan Pellicciotti</td><td class="breakme">quinpell@gmail.com</td></tr>
                      <tr><td><b>Member at large</b></td><td>Henry Bell (Hanks RS)</td><td class="breakme">info@engineeredwebsites.com</td></tr>
                      <tr><td><b>Member at large</b></td><td>Hunter Knight</td><td class="breakme">hunterpknight@gmail.com</td></tr>
                      <tr><td><b>Member at large</b></td><td>Justin Pham</td><td class="breakme">phamruns247@gmail.com</td></tr>
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
