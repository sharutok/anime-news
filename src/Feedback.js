import React, { useState } from "react";

import icon from "./icon.png";
import Modal from "./Modal";

function Feedback({ showFeedback, setShowFeedback }) {
  const [modal, setModal] = useState(false);
  function FeedbackBody() {
    return (
      <>
        <div className="feedback-info">
          <h1>Have a feedback!</h1>
          <button className="send-feedback" onClick={() => setModal(true)}>
            We are listening
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <div className="tot-feedback">
        <section className="reader">
          <img className="img-icon" src={icon} alt="user-pic" />
          <h3>Hi, Reader</h3>
          <h4>this is your news</h4>
        </section>
        {showFeedback && <FeedbackBody />}
        {/* <div className="feedback-info">
          <h1>Have a feedback!</h1>
          <button className="send-feedback" onClick={() => setModal(true)}>
            We are listening
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Feedback;
