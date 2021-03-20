import React from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import PropTypes from 'prop-types';


function CalcParent(parent, member) {
  switch (parent) {
    case member.East:
      parent=member.South;
      break;
    case member.South:
      parent=member.West;
      break;
    case member.West:
      parent=member.North;
      break;
    case member.North:
      parent=member.East;
      break;
  }

  return parent;
}


export default CalcParent;
