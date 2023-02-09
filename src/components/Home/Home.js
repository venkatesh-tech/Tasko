import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";

import BoardThumbnail from "../Board/BoardThumbnail";
import "./Home.css";

const Home = ({ boards, boardOrder, dispatch }) => {
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = (e) => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };

  const renderBoards = () => {
    return boardOrder.map((boardID) => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...board} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <h3 className="CreateTitle">New Board</h3>
        <input
          className="CreateInput"
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Your new board title..."
          type="text"
        />
      </form>
    );
  };

  return (
    <div className="HomeContainer">
      <div className="Thumbnails">{renderBoards()}</div>
      {renderCreateBoard()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(Home);
