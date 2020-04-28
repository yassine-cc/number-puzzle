import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Board from "./components/Board";
import Info from "./components/Info";
import controlGame from "./utils/gameControl";
import { initGame } from "./store/actions";

const Page = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(60, 25%, 95%);
`;
const GameContainer = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    margin: 30px auto;
    width: 450px;
    height: 540px;
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
    <Page>
      <GameContainer>
        <Info moves={state.moves} best={state.best} />
        <Board
          board={state.currentBoard}
          movedCell={state.movedCell}
          movedFrom={state.movedFrom}
        />
      </GameContainer>
    </Page>
  );
}

export default Game;
