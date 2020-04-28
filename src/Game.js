import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Board from "./components/Board";
import Info from "./components/Info";
import controlGame from "./utils/gameControl";
import { initGame } from "./store/actions";

const GameContainer = styled.div`
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 500px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    margin: 30px auto;
    width: 450px;
  }
`;

function Game() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initGame());
  }, [dispatch]);
  useEffect(() => {
    window.addEventListener("keyup", controlGame(dispatch));
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keyup", controlGame(dispatch));
    };
  }, [dispatch]);
  return (
    <GameContainer>
      <Info moves={state.moves} best={state.best} />
      <Board
        board={state.currentBoard}
        movedCell={state.movedCell}
        movedFrom={state.movedFrom}
      />
    </GameContainer>
  );
}

export default Game;
