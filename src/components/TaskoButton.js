import React from "react";
import Button from "@material-ui/core/Button";

// const StyledButton = styled(Button)`
//   && {
//     color: white;
//     background: #0000ff;
//   }
// `;

const TaskoButton = ({ children, onClick }) => {
  return (
    <Button
      style={{ color: "white", background: "#0000ff" }}
      variant="contained"
      onMouseDown={onClick}
    >
      {children}
    </Button>
  );
};

export default TaskoButton;
