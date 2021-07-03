import React from 'react'
import './IconContent'
import * as Icon  from 'react-feather'
import DeleteIcon from './DeleteIcon'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
function IconContent() {
    return (
        <div>
            <div  className="container   ">
               <div className="row  align-items-start p-2 mt-5 iconcontentleft">
                  <div className="col-1">

                    <ChatBubbleOutlineIcon/>
                  </div>
                        <div className="col-9 mx-auto ">
                    Message
                  </div>
               </div>
                <div class="w-100"></div>
                   <div className="row  p-2">
                  <div className="col-1">
                     <Icon.Edit   />
                  </div>
                        <div className="col-9 mx-auto">
                    Edit

                  </div>
               </div>
                  <div class="w-100"></div>
                  <div className="row p-2 ">
                  <div className="col-1">
                     <DeleteIcon/>
                  </div>
                        <div className="col-9 mx-auto" style={{color:' #FF0000'}}>
                    Delete
                  </div>
               </div>

            </div>
        </div>
    )
}

export default IconContent
