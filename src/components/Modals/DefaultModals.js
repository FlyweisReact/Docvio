/** @format */

import React from "react";
import { Modal } from "react-bootstrap";
import { checkGif } from "../../asset";

const DefaultModals = ({ show, handleClose, children }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className={"centered-modal"}
      centered
    >
      {children}
    </Modal>
  );
};

export default DefaultModals;

export const ChangesSaved = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className={"changes-saved-modal"}>
        <img src={checkGif} alt="" className="gif" />

        <div className={"content"}>
          <p className={"title"}>Changes Saved</p>
        </div>
      </div>
    </Modal>
  );
};
