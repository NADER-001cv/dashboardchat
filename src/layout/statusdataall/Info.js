import React from 'react'
import './info.css'
import Header from '../../components/socialpagehome/header/Header'
import Card from '../../components/socialpagehome/card/Card'

import Datatable from '../../components/status/datatable/Datatable'
import PaymentInfo from '../../components/status/paymentinfo/PaymentInfo'
import DebitCardChang from '../../components/status/bankcard/DebitCardChang'
import Order from '../../components/status/overaliorder/Order'
function Info() {
    return (
        <div className="info">

               <div className="info_position">
                     <Header/>
                     
                      <Card/>
                      <PaymentInfo/>

                      <DebitCardChang/>
                      <Order/>
                     <Datatable/>
                  
                  
               </div>
        </div>
    )
}

export default Info
