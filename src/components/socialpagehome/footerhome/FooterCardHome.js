import React from 'react'
import ServiceCard from '../servicecardfooter/ServiceCard'
import ServiceCardtwo from '../servicecardfooter/ServiceCardtwo'
function FooterCardHome() {
    return (
        <div>
             <div className="container">
                <div className="row  mb-5">
                  <div className="col-md-5 mx-auto col-10">
                  <ServiceCard/>

                  </div>
                    <div className="col-md-5 mx-auto col-10">
                  <ServiceCardtwo/> 
                  
                  </div>
                </div>
             </div>
        </div>
    )
}

export default FooterCardHome
