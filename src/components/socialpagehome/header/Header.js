import React from "react";
import "./header.css";
import Message from "./iconheadertop/Message";
import Notification from "../../socialpagehome/header/iconheadertop/Notification";
import Setting from "../../socialpagehome/header/iconheadertop/Setting";
import SendMessage from "../../socialpagehome/header/iconheadertop/SendMessage";
import topimg from "../../../images/imagesheader/topimg.png";
function Header() {
  return (
    <div>
      <div className="">
        <div className="row  justify-content-end  content ">
         
            <div className="content_icon mb-3 mt-3">
              <div className="icon">
                <img src={topimg} alt="topavatar" className="w-100" />
              </div>
              <div className="icon">
                <Notification />
              </div>

              <div className="icon">
                <Message />
              </div>

              <div className="icon">
                <Setting />
              </div>
              <div className="icon">
                <SendMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Header;
