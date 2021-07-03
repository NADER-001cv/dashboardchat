
import React from 'react'
import './footertrack.css'
function FooterTrack() {
    return (
        <div>
            <div className="container bg-white  footer_table px-3 pt-3 pb-5 rounded-3">
                  <div className="row  samerow p-2"  >
                    <div className="col-md-3 fw-bold">
                    25 May 2021 10:32
                    </div>
                      <div className="col-md-9 ">
                      Negotiation
                    </div>
                  </div>
                     <div className="row  samerow p-2">
                    <div className="col-md-3 fw-bold">
                    25 May 2021  22:13
                    
                    </div>
                      <div className="col-md-9">
                      Paid
                    </div>
                  </div>
                     <div className="row  samerow p-2">
                    <div className="col-md-3 fw-bold">
                    25 May 2021 22:40
                    </div>
                      <div className="col-md-9">
                      Processing to confirmation
                    </div>
                  </div>
                     <div className="row  samerow p-2">
                    <div className="col-md-3 fw-bold">
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
