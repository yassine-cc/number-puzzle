import React from "react";
import { useDispatch } from "react-redux";
import { initGame } from "../store/actions";
import styled from "styled-components";

const Title = styled.div`
  font-size: 54px;
  font-weight: 900;
  font-family: sans-serif;
  color: hsl(240deg, 30%, 30%);
`;
const Row = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;
const Column = styled.div`
  border-radius: 10px;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`;
const Stat = styled.div`
  margin: 0px auto;
  padding: 15px 30px;
  background-color: hsl(240, 20%, 65%);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 10px;
  height: 30%;
  p {
    font-family: sans-serif;
    text-transform: uppercase;
    margin: 0px;
  }
  p:first-child {
    color: hsl(240deg, 10%, 90%);
    font-size: 16px;
    font-weight: 700;
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 900;
    color: white;
  }
`;

const Button = styled.button`
  font-size: 18px;
  color: white;
  background-color: hsl(240deg, 80%, 80%);
  border: none;
  font-weight: 800;
  border-radius: 5px;
  padding: 10px 15px;
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
export default function Info({ moves, best }) {
  const dispatch = useDispatch();
  return (
    <Column>
      <Row style={{ justifyContent: "space-between" }}>
        <Title>Puzzle</Title>
        <Row>
          <Stat>
            <p>Moves</p>
            <p>{moves}</p>
          </Stat>
          <Stat>
            <p>Best</p>
            <p>{best}</p>
          </Stat>
        </Row>
      </Row>

      <Row>
        <Button onClick={() => dispatch(initGame())}>New Game</Button>
      </Row>
    </Column>
  );
}
