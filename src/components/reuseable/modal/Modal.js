import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

function Modal({ heading, setOpen, open, children }) {
  return open
    ? ReactDom.createPortal(
        <>
          <div className="modal-wrapper">
            <div className="modal-container">
              <div className="modal">
                <div className="modal-heading">
                  <h3 className="modal-heading-text">{heading}</h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="modal-close"
                  >
                    &times;
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
        </>,
        document.getElementById("modal")
      )
    : null;
}

export default Modal;
