/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const DefaultCanvas = ({
  show,
  handleClose,
  placement = "end", 
  children,
  className = "", 
}) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={placement}
      className={className}
    >
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default DefaultCanvas;
