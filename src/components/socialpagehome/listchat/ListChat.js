import React from "react";
import "./listchat.css";
import img1 from "../../../images/livemessageAll/img1.png";
import img2 from "../../../images/livemessageAll/img2.png";
import img3 from "../../../images/livemessageAll/img3.png";
import img4 from "../../../images/livemessageAll/img4.png";
import img5 from "../../../images/livemessageAll/img5.png";
function ListChat() {
  return (
    <div>
      <div className="container p-2 list_chat">
        <div className="row  justify-content-around align-items-start">
          <div className="col-md-4">
            <img src={img1} alt="img" className="" />
          </div>
          <div className="col-md-4 ">
            <span className="fw-bold">Brian Robinson</span>

            <div />

            <div className="col-12 my-2">
              <p className="">Willmar Group</p>
            </div>
          </div>
        </div>

        <div className="row  justify-content-around align-items-start">
          <div className="col-md-4">
            <img src={img2} alt="img" className="" />
          </div>
          <div className="col-md-4 ">
            <span className="fw-bold">Brian Robinson</span>

            <div />

            <div className="col-12 my-2">
              <p className="">Willmar Group</p>
            </div>
          </div>
        </div>
        <div className="row  justify-content-around align-items-start">
          <div className="col-md-4">
            <img src={img3} alt="img" className="" />
          </div>
          <div className="col-md-4 ">
            <span className="fw-bold">Brian Robinson</span>

            <div />

            <div className="col-12 my-2">
              <p className="">Willmar Group</p>
            </div>
          </div>
        </div>
        <div className="row  justify-content-around align-items-start">
          <div className="col-md-4">
            <img src={img4} alt="img" className="" />
          </div>
          <div className="col-md-4 ">
            <span className="fw-bold">Brian Robinson</span>

            <div />

            <div className="col-12 my-2">
              <p className="">Willmar Group</p>
            </div>
          </div>
        </div>
        <div className="row  justify-content-around align-items-start">
          <div className="col-md-4">
            <img src={img5} alt="img" className="" />
          </div>
          <div className="col-md-4 ">
            <span className="fw-bold">Brian Robinson</span>

            <div />

            <div className="col-12 my-2">
              <p className="">Willmar Group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListChat;
