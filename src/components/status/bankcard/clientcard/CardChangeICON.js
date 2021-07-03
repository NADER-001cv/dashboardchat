import React from 'react'
import * as Icon  from 'react-feather'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function CardChangeICON() {
    return (
        <div>
            <div  className="container">
               <div className="row  align-items-start p-2 mt-4">
                  <div className="col-1">

                    <AddCircleOutlineIcon/>
                  </div>
                        <div className="col-9 mx-auto ">
                    Add
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
                     <Icon.Delete/>
                  </div>
                        <div className="col-9 mx-auto">
                    Delete
                  </div>
               </div>

            </div>
        </div>
    )
}

export default CardChangeICON
