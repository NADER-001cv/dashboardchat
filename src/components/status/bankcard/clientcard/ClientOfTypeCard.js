import React from "react";
import IconVisa from './iconbanck/IconVisa'
function ClientOfTypeCard() {
  return (
    <div>
      <div className="container">
        <div className="row   justify-content-between    p-2">
          <div class="col-md-4">

          Name
          
          </div>
          <div class="col-md-4 offset-md-4">

         Type of Card

          </div>
        </div>
        <div className="row  justify-content-between    p-2">
          <div class="col-md-4 fw-bolder">
          
        Tom Clay

          </div>
          <div class="col-md-4 offset-md-4 fw-bolder">

            Debit Card

          </div>
        </div>
        <div className="row  justify-content-between  p-2">
          <div class="col-md-4">


      Card Number
          
          </div>
          <div class="col-md-4 offset-md-4">
                   
               Bank
              
          </div>
        </div>
        <div className="row  justify-content-between ">
          <div class="col-md-4  fw-bolder">
          
            1234   -   1234   -  1234   -   1234  
          
          
          </div>
          <div class="col-md-4  ">
             <IconVisa/>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientOfTypeCard;
