import React from 'react'
import IconInfoPayment from './IconInfoPayment'
function PaymentInfo() {
    return (
          <div className="container mt-3">
            <div  className="d-flex justify-content-start mx-5 mb-3 ">
                <div className="ms-5">
                
              <IconInfoPayment/>
                </div>
              <span className="mx-4  ">
               <p className="fw-bold">
                                Payment info

               </p>
              </span>
            </div>
        </div>
    )
}

export default PaymentInfo
