import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  box-sizing: border-box;
  box-shadow: 2px 2px 16px hsl(240deg, 90%, 90%);
`;

export default function Board({ board, movedCell, movedFrom }) {
  return (
    <Grid>
      {board.map((value, index) => (
        <Square
          key={value}
          value={value}
          movedFrom={index === movedCell ? movedFrom : undefined}
          animate={index === movedCell}
        />
      ))}
    </Grid>
  );
}
