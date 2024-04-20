import { boardActions } from "../actions/actionTypes";
import { BoardListProps } from "../types";

const getInitialState = (): BoardListProps => ({
    boardList: [],
  });
  
  const boardReducer = (state:BoardListProps = getInitialState(), action:any) => {
    switch (action.type) {
      case boardActions.CREATE_BOARD:
        return {
          ...state,
          boardList: [...state.boardList, action.payload],
        };
      case boardActions.UPDATE_BOARD:
        return {
          ...state,
          boards: state.boardList.map((board) =>
            board.id === action.payload.boardId ? action.payload.updatedBoard : board
          ),
        };
      case boardActions.DELETE_BOARD:
        return {
          ...state,
          boards: state.boardList.filter((board) => board.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default boardReducer;