import React from 'react'
import './tabletrack.css'
import Content from '../tableafterorder/tablebodyafterorder/Content'
import  IconContent  from '../tableafterorder/tablebodyafterorder/IconContent'
function TableTrack() {
    return (
        <div>
                  <div className="container content_table mx-5">
                <div className="row bg-white  justify-content-between   ">
                   <div className="col">
                     <Content/>
                   </div>
                      <div className="col  ">
                       <IconContent/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default TableTrack
