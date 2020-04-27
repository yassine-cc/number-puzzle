import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 25%;
  box-sizing: border-box;
  border: 0.5px solid red;
  font-size: 2rem;
  font-weight: 700;
  color: hsl(0deg, 60%, 50%);
  border-radius: 5px;
  background-color: ${(props) =>
    props.content
      ? `
      hsl(0deg, 30%, 80%);
  `
      : `
      hsl(0deg,30%, 50%);
  `};
`;

const Text = styled.p``;

export default function Square({ value }) {
  return (
    <Cell content={value}>
      <Text>{value ? value : ""}</Text>
    </Cell>
  );
}
