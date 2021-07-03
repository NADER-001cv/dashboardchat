import React from 'react'
import  './asid.css'
import Listasid from '../../components/asid/Listasid'
import Logo from '../../components/asid/Custmerlogo'
import  Dashbord from '../../components/asid/Dashbord'
import Payment from '../../components/asid/Payment'
import Setting from '../../components/asid/Setting'
function Asid() {
    return (
        <div className="asidbar_fix">
              <Logo/>
              <Dashbord/>
             <Listasid/>
             <Payment/>
             <Setting/>
        </div>
    )
}

export default Asid
