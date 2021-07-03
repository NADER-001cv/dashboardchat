import React from 'react'
import CardChangeICON from './clientcard/CardChangeICON'
import ClientOfTypeCard from './clientcard/ClientOfTypeCard'
import './debitcardchang.css'
function DebitCardChang() {
    return (
        <div>
            <div className="container margin_payment  table_color">
                <div className="row bg-white  me-2  p-4">
                   <div className="col">
                     <ClientOfTypeCard/>
                   </div>
                      <div className="col  w-75">
                       <CardChangeICON/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default DebitCardChang
