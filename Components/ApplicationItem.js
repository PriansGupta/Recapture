import React from "react";
import Chip from "@mui/material/Chip";

function ApplicationItem(props) {
  return (
    <div className="ApplicationItem">
      <div className="title">
        <h5 className="organisation">{props.title}</h5>
        <p className="organisation">
          Organisation : <Chip className="chip" label={props.organisation} color="warning" />
        </p>
      </div>
      <div className="Applied">
        <Chip label="Applied" color="success" />
      </div>
    </div>
  );
}

export default ApplicationItem;
