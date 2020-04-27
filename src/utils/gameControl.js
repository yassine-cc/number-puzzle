import { moveUp, moveDown, moveLeft, moveRight } from "../store/actions";

const controlGame = (dispatch) => (event) => {
  switch (event.keyCode) {
    case 38:
      return dispatch(moveUp());
    case 39:
      return dispatch(moveRight());
    case 40:
      return dispatch(moveDown());
    case 37:
      return dispatch(moveLeft());
    default:
      return;
  }
};

export default controlGame;
