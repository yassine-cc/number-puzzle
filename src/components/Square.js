import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  // width: 25%;
  // height: 25%;
  box-sizing: border-box;
  // border: 0.5px solid hsl(240deg, 50%, 90%);
  font-size: 2rem;
  font-weight: 700;
  // border-radius: 7px;
  background-color: hsl(240deg, 20%, 70%);
`;
const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // border: 0.3px solid hsl(240deg, 30%, 50%);
  color: hsl(240deg, 0%, 100%);
  // border-radius: 7px;
  background-color: hsl(240deg, 30%, 80%);
  opacity: 1;
  @keyframes left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes down {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0px);
    }
  }
  ${({ animate, direction }) =>
    animate ? `animation: ${direction} .1s forwards;` : ``}
`;
// const Text = styled.p``;
const Empty = styled.div`
  display: none;
`;
const directions = ["down", "left", "up", "right"];

export default function Square({ value, movedFrom, animate }) {
  return (
    <Cell>
      {value ? (
        <Tile
          direction={
            movedFrom !== undefined && animate ? directions[movedFrom] : null
          }
          animate={animate}
        >
          <p>{value}</p>
        </Tile>
      ) : (
        <Empty />
      )}
    </Cell>
  );
}
