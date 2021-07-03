import React from 'react'
import '../app.css'
import Asid from "../layout/asidbar/Asid";
import ShowTracking from '../layout/tracking/ShowTracking'
function ServiceShow() {
    return (
          <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-2  bg-white">
          <Asid />
        </div>
        <div className="col-md-10 asid_bg_clor z-index-2">
          <ShowTracking />
        </div>
      </div>
    </div>
    )
}

export default ServiceShow
