import React from "react";
import "../app.css";
import Info from "../layout/statusdataall/Info";
import Asid from "../layout/asidbar/Asid";
function Aboutinfo() {
  return (
    <div className="container-fluid">
      <div className="row flex-wrap p-0">
        <div className="col-md-2 col-sm-12 p-2  bg-white">
          <Asid />
        </div>
        <div className="col-md-10 col-sm-12   asid_bg_clor z-index-2">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default Aboutinfo;
