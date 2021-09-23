import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function Link({ alink, setShowLinks }) {
  return (
    <div className="openlink">
      <h1 className="closelink">
        {" "}
        <AiOutlineClose
          onClick={() => {
            setShowLinks(false);
          }}
        />
      </h1>

      <iframe
        title="sharan"
        className="in-web"
        src={alink}
        frameBorder="0"
        width="1100"
        height="700"
        allow="true"

      >
        {" "}
      </iframe>
          
    </div>
  );
}

export default Link;
