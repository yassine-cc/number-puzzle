import React from "react";
import { useDispatch } from "react-redux";
import { initGame } from "../store/actions";
import styled from "styled-components";

const Div = styled.div`
  box-shadow: 1px 1px 8px hsl(240deg, 90%, 90%);
  border-radius: 10px;
  padding: 5px;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
const Stat = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  p {
    margin: 5px;
    color: hsl(240deg, 70%, 70%);
  }
`;

const Button = styled.button`
  font-size: 18px;
  color: white;
  background-color: hsl(240deg, 80%, 80%);
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
  outline: none;
  &:hover {
    background-color: hsl(240deg, 75%, 75%);
  }
  &:active {
    background-color: hsl(240deg, 70%, 70%);
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(2px);
  }
`;
export default function Info({ moves }) {
  const dispatch = useDispatch();
  return (
    <Div>
      <Stat>
        <p>Moves</p>
        <p>{moves}</p>
      </Stat>
      <Stat>
        <Button onClick={() => dispatch(initGame())}> Start a new Game</Button>
      </Stat>
    </Div>
  );
}
