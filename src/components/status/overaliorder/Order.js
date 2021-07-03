import React from 'react'
import IconOverali from './IconOverali'
function Order() {
    return (
        <div>
             <div className="container mt-4">
                <div className="d-flex justify-content-start mx-5 mb-3 ">
                   <div className="ms-5">
                     <IconOverali/>
                   </div>
                    <span className="col-9 mx-4 fw-bold">
                    <p>
                    
                     Overall Order
                    </p>
                   </span>
                </div>
             </div>
        </div>
    )
}

export default Order
