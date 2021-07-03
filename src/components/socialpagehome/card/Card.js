import React from "react";
import "./card.css";
import Iconone from "./iconcard/Iconone";
import Icontwo from './iconcard/IconTwo'
import Iconthree from './iconcard/IconThree'
import Iconfour from './iconcard/IconFour'
import imgb from "../../../images/cardimages/b.png";
import imgc from "../../../images/cardimages/c.png";
import imgd from "../../../images/cardimages/d.png";

function Card() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row rows-cols-auto  justify-content-around   align-items-start">
          <div className="col-md-3 col-sm-6 col-12 h-50">
            <div class="card card_dimentions mb-3 ">
              <div class="card-body">
                <div class="d-flex justify-content-start">
                  <Iconone />
                  <div className="text-center ms-2">
                    <h5 class="card-title pt-2"> Company Order Offer</h5>

                    <p class="card-text">
                      <small class="text-muted fw-bolder fs-4">30</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <div class="card mb-3 card_dimentions">
              <div class="card-body">
                <div class="d-flex justify-content-start">
                
                   <Icontwo/>
                <div class="text-center ms-2">
               
                    <h5 class="card-title pt-2">Order</h5>

                    <p class="card-text">
                      <small class="text-muted  fw-bolder  fs-4">2</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



                <div className="col-md-3 col-sm-6 col-12">
            <div class="card mb-3 card_dimentions">
              <div class="card-body">
                <div class="d-flex justify-content-start">
              
                     <Iconthree />
                <div class="text-center ms-2">
               
                    <h5 class="card-title pt-2">Order</h5>

                    <p class="card-text">
                      <small class="text-muted  fw-bolder  fs-4">2</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
               <div className="col-md-3 col-sm-6 col-12">
            <div class="card mb-3 card_dimentions">
              <div class="card-body">
                <div class="d-flex justify-content-start">
            
                 <Iconfour/>
                <div class="text-center ms-2">
               
                    <h5 class="card-title pt-2">Order</h5>

                    <p class="card-text">
                      <small class="text-muted  fw-bolder  fs-4">2</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
     


           </div>
      </div>
    </div>
  );
}

export default Card;



//   <img src={imgb} class="img-fluid rounded-start" alt="..." />

//     <img src={imgc} class="img-fluid rounded-start" alt="..." />


//       <img src={imgd} class="img-fluid rounded-start" alt="..." />