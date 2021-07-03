import React from 'react'
import Home from './layout/home/Home'
import './app.css'
import Asid from './layout/asidbar/Asid'
function Template() {
    return (
        <div className="container-fluid">

           <div className="row">
             <div className="col-md-2  p-1 bg-white  ">
            <Asid/>

             </div>
              <div className="col-md-10    asid_bg_clor z-index-2">
             
                 <Home/>
             </div>
           </div>
        
    </div>
    )
}

export default Template
