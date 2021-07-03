
import React from 'react'
import './footertrack.css'
function FooterTrack() {
    return (
        <div>
            <div className="container mx-5 bg-white  footer_table p-5">
                  <div className="row">
                    <div className="col-md-3">
                    25 May 2021 10:32
                    </div>
                      <div className="col-md-9 ">
                      Negotiation
                    </div>
                  </div>
                     <div className="row">
                    <div className="col-md-3">
                    25 May 2021  22:13
                    
                    </div>
                      <div className="col-md-9">
                      Paid
                    </div>
                  </div>
                     <div className="row">
                    <div className="col-md-3">
                    25 May 2021 22:40
                    </div>
                      <div className="col-md-9">
                      Processing to confirmation
                    </div>
                  </div>
                     <div className="row">
                    <div className="col-md-3">
                   26 May 2021 01:13
                    </div>
                      <div className="col-md-9">
                      On Work
                    </div>
                  </div>
            </div> 
        </div>
    )
}

export default FooterTrack
