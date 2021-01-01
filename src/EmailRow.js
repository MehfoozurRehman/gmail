import React from "react";
import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

export default function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const Dispatch = useDispatch();
  const openMail = () => {
    history.push("/mail");
    Dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
  };
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="onclick" onClick={openMail}>
        <h3 className="emailRow__title">{title}</h3>
        <div className="emailRow__message">
          <h4>
            {subject}
            <span className="emailRow__description"> - {description}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    </div>
  );
}
