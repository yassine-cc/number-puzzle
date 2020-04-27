import constants from "../constants";
import { generateGame, makeMove } from "../../utils/gameMechanics";
const { INIT_GAME, MOVE } = constants;

const endBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const defaultBoard = {
  moves: 0,
  gameWon: false,
  currentBoard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
  boardHistory: [],
};

const rootReducer = (state = defaultBoard, action) => {
  switch (action.type) {
    case INIT_GAME:
      return { ...defaultBoard, currentBoard: generateGame(endBoard) };
    case MOVE:
      if (state.gameWon) return state;
      const newState = {
        ...state,
        currentBoard: [...state.currentBoard],
        boardHistory: [...state.boardHistory],
      };
      const afterMove = makeMove(state.currentBoard, action.payload);
      if (afterMove.moved) {
        newState.moves += 1;
        newState.boardHistory.push(newState.currentBoard);
        newState.currentBoard = afterMove.board;
        newState.gameWon =
          JSON.stringify(newState.currentBoard) === JSON.stringify(endBoard);
      }
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
