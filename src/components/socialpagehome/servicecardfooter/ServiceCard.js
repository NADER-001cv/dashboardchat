import React from "react";
import IconManagment from "./iconservicecard/IconManagment";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import IconEyeGlassess from './iconservicecard/IconEyeGlassess'
import IconDelete from './iconservicecard/IconDelete'



function ServiceCard() {
  return (
    <div>
         <div className="container mt-4 bg-white p-3">
               <div className="row justify-content-between my-2 o-1">
               <div className="col-md-1">
               <IconManagment/>
               </div>
                <div className="col-md-5  fw-bolder">
                  Management Service
               </div>
                <div className="col-md-4  fs-4  offset-md-2">
                   $ 100
               </div>
               </div>
                <div className="row justify-content-between my-3">
                   <div className="col-md-6">
                      <p>
                        (Project Brief Desc) Lorem ipsum <br/>
                         dolor sit amet, consectetur  <br/>
                         adipiscing elit. Integer luctus, eu
                      </p>
                   </div>
                      <div className="col-md-5 offset-md-1">
                       <div className="d-flex justify-content-evenly">
                           <EditOutlinedIcon/>
                      <ChatBubbleOutlineOutlinedIcon/>
                      <IconEyeGlassess/>
                      <IconDelete/>
                       </div>
                     
                   </div>
               </div>
         </div>
    </div>
  );
}

export default ServiceCard;
