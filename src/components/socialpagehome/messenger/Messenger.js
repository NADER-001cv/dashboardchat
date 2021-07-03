import React from "react";
import Imgacontent from "../../../images/imagechatcontent/imgacontent.png";
import "./Messenger.css";
function Messenger() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-1 pe-1 col-sm-6">
            <img src={Imgacontent} alt="" />
          </div>
          <div className="col-md-11     align-self-end  col-sm-6">
            <p className=" bg-message text-center p-1">Hello sir, how about recomended service, do you accept ?</p>
          </div>
          <div class="w-100"></div>
          <div className="col-9 mb-5 col-sm-6">
            <p className="lead bg-white mx-5 p-1 message_response mt-2">
              My boss is agree and ill do paymet later, because i need to wait
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-md-1 pe-1  col-6">
            <img src={Imgacontent} alt="" />
          </div>
          <div className="col-md-11     align-self-end col-6">
            <p className=" bg-message text-center p-1">Amazing, thats great to hear, ill wait</p>
          </div>
          <div class="w-100"></div>
          <div className="col-9 mb-5  col-sm-6">
            <p className="lead bg-white mx-5 p-1 message_response mt-2">
               Sure, i hope we doing it well
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-md-1 pe-1  col-6">
            <img src={Imgacontent} alt="" />
          </div>
          <div className="col-md-11     align-self-end  col-6 ">
            <p className=" bg-message text-center p-1">
            We try our best
            </p>
          </div>
          <div class="w-100 mb-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
