import React from "react";

import { AiOutlineClose } from "react-icons/ai";
function Modal({ setModal }) {
  return (
    <div className="modal-feedback">
      <ul>
        <li className="top">
          <h1>Thank you so much for taking the time!</h1>
          <h1>
            <AiOutlineClose
              className="close"
              onClick={() => {
                setModal(false);
              }}
            />
          </h1>
        </li>
      </ul>
      <ul className="user-info">
        <li>
          <label htmlFor="">Name</label>
        </li>
        <li>
          <input type="text" name="" id="" />
        </li>
        <li>
          <label htmlFor="">Email-Id</label>
        </li>
        <li>
          <input type="email" name="" id="" />
        </li>
        <li>
          <label htmlFor="">Company</label>
        </li>
        <li>
          <input type="text" name="" id="" />
        </li>
        <li>
          <label htmlFor="">Ph No</label>
        </li>
        <li>
          <input type="number" name="" id="" />
        </li>
        <li>
          <label htmlFor="">Comments</label>
        </li>
        <li>
          <input className="comment" type="text" name="" id="" />
        </li>

        <button
          className="close"
          onClick={() => {
            setModal(false);
          }}
          className="submit"
        >
          Submit Feedback!
        </button>
      </ul>
    </div>
  );
}

export default Modal;
