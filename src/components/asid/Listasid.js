import React from "react";
import "./asid.css";
import { Link } from "react-router-dom";
import Iconorder from "./iconasid/Ordericon";
import SelectBottom from "./iconasid/SelectBottom";
function Listasid() {
  return (
    <div className="d-flex justify-content-center  align-items-center mb-3 p-1">
      
        <Iconorder />
      <div className="dropdown mx-1">
        <button className="dropbtn dropdown-toggle">Order</button>
        <div className="dropdown-content ">
           <Link  className="item_color"   to="service" >tracking </Link>
          <Link   className="item_color"  to="aboutstatus" > status </Link>
          
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Listasid;

//  <div className="dropdown">
//        <div  className="dropdow_select">
//          <span className="select"> Other</span>
//            <div>
//            <SelectBottom/>
//            </div>
//        </div>

//                 <div  className="dropdown_list">
//                         <ul>
//                                 <li className="item">
//                                 <Link   to="aboutstatus" > status </Link>
//                                 </li>
//                                     <li className="item">
//                                 <Link   to="service" >tracking </Link>
//                                 </li>

//                     </ul>
//                 </div>

//  </div>
