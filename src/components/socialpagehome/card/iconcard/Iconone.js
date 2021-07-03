import React from "react";

function Iconone() {
       const styleone = {
    width: "36px",
    height: "36px",
    backgroundColor: "#1EA5CF",
    borderRaduis: "10px",
  };
  return (
    <div  className="  p-1  rounded-3 m-2" style={styleone} >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 21H2V19H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H18C18.2652 3 18.5196 3.10536 18.7071 3.29289C18.8946 3.48043 19 3.73478 19 4V9H21V19H22V21ZM17 19H19V11H13V19H15V13H17V19ZM17 9V5H5V19H11V9H17ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM7 7H9V9H7V7Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

export default Iconone;
