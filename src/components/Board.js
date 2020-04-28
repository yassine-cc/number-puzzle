import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;
const Grid = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  padding: 15px;
  position: absolute;
  background-color: hsl(240, 20%, 65%);

  border-radius: 5px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-sizing: border-box;
  // box-shadow: 2px 2px 16px hsl(240deg, 90%, 90%);
  background-color: ;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 15px;
  column-gap: 15px;
`;

export default function Board({ board, movedCell, movedFrom }) {
  return (
    <Container>
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
    </Container>
  );
}
