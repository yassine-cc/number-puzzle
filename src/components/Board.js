import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 67%;
  box-sizing: border-box;
  box-shadow: 2px 2px 16px hsl(0deg, 90%, 90%);
`;

export default function Board({ board }) {
  return (
    <Grid>
      {board.map((value) => (
        <Square key={value} value={value} />
      ))}
    </Grid>
  );
}
