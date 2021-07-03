import React from 'react'
import MessengerEditor from '../messengereditor/MessengerEditor'
import ListChat from '../listchat/ListChat'
import "./AllChat.css"
function AllChatMessengerContent() {
    return (
        <div>
            <div  className="container">
               <div className="row textMessageCenter">
                 <div className="col-12 col-md-2">
                   <ListChat/>
                 </div>
                    <div className="col-12 col-md-9 mx-4 p-2">
                   <MessengerEditor/>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default AllChatMessengerContent
