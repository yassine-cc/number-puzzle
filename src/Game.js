import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Board from "./components/Board";
import Info from "./components/Info";
import controlGame from "./utils/gameControl";
import { initGame } from "./store/actions";

const GameContainer = styled.div`
  margin: 50px auto;
  display: flex;
  width: 600px;
  height: 400px;
  box-sizing: border-box;
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
      <Board
        board={state.currentBoard}
        movedCell={state.movedCell}
        movedFrom={state.movedFrom}
      />
      <Info moves={state.moves} />
    </GameContainer>
  );
}

export default Game;
