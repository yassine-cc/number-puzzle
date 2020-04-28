const moveCoordinates = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

const getEmptyCell = (board) => board.indexOf(0);

const getDestinationCell = (cell, move) => {
  const direction = moveCoordinates[move];
  return cell + direction[0] + 4 * direction[1];
};

const randomMove = (board) => {
  let move;
  do {
    move = Math.floor(Math.random() * 4);
  } while (!canMove(board, move));
  return move;
};

// export const possibleMoves =
const canMove = (board, nove) => {
  const emptyCell = getEmptyCell(board);
  const destination = getDestinationCell(emptyCell, nove);
  const jump = (destination % 4) - (emptyCell % 4);
  return destination > -1 && destination < 16 && jump > -2 && jump < 2;
};

const swap = ([...board], cell1, cell2) => {
  const temp = board[cell1];

  board[cell1] = board[cell2];
  board[cell2] = temp;

  return board;
};

export const makeMove = ([...board], move) => {
  const emptyCell = getEmptyCell(board);
  if (!canMove(board, move)) return { moved: false, board };
  const destinationCell = getDestinationCell(emptyCell, move);
  return {
    moved: true,
    board: swap(board, emptyCell, destinationCell),
    movedCell: emptyCell,
  };
};

export const generateGame = ([...endBoard]) => {
  let currentBoard = endBoard;
  for (let i = 0; i < 100; i++) {
    currentBoard = makeMove(currentBoard, randomMove(currentBoard)).board;
  }
  return currentBoard;
};
