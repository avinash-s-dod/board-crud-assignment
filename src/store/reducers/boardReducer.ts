import { boardActions } from "../actions/actionTypes";
import { BoardListProps } from "../types";

const getInitialState = (): BoardListProps => ({
  boardList: [],
});

const boardReducer = (
  state: BoardListProps = getInitialState(),
  action: any
) => {
  switch (action.type) {
    case boardActions.CREATE_BOARD:
      return {
        ...state,
        boardList: [...state.boardList, action.payload],
      };
    case boardActions.UPDATE_BOARD:
      return {
        ...state,
        boardList: state.boardList.map((board) =>
          String(board.id) === String(action.payload.id)
            ? action.payload
            : board
        ),
      };
    case boardActions.DELETE_BOARD:
      return {
        ...state,
        boardList: state.boardList.filter(
          (board) => board.id !== action.payload.id
        ),
      };

    case boardActions.GET_BOARD_LIST:
      return {
        ...state,
        boardList: state.boardList,
      };
    default:
      return state;
  }
};

export default boardReducer;
