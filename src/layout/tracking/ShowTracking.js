import React from 'react'
import './showtracking.css'

import Header from '../../components/socialpagehome/header/Header'
import Card from '../../components/socialpagehome/card/Card'
import Order from '../../components/track/trackorder/Order'
import TableTrack  from '../../components/track/alltablecontent/TableTrack'
import Tracking  from '../../components/track/icontrackoneword/Tracking'
import FooterTrack  from '../../components/track/footerTrack/FooterTrack'
function ShowTracking() {
    return (
         <div className="show">
            <div classNam="show_postion">
            <Header/> 
              <Card/>
               <Order/>
              <TableTrack/>  
             <Tracking/>
             <FooterTrack/>
            </div>
        </div>
    )
}

export default ShowTracking
