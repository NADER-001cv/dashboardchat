import React from 'react'
import IconPayment from './iconasid/Paymenticon'
import "./asid.css"
function Payment() {
    return (
       

         <div className="asid_fix">
            <div  className="d-flex justify-content-center mb-3 p-1">
              <IconPayment/>
              <span className="mx-3">
                Payment
              </span>
            </div>
        </div>
    )
}

export default Payment
