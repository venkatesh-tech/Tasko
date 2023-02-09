import React from "react";
import "./board.css";

const BoardThumbnail = ({ title }) => {
  return (
    <div className="Thumbnail">
      <h4 className="Title">{title}</h4>
    </div>
  );
};

export default BoardThumbnail;
