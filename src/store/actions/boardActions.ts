import { Board } from "../types";
import { boardActions } from "./actionTypes";

export const createBoard = (board: Board) => {
  return async (dispatch: any) => {
    dispatch({
      type: boardActions.CREATE_BOARD,
      payload: board,
    });
  };
};

export const updateBoard = (updatedBoard: Board) => {
  return async (dispatch: any) => {
    dispatch({
      type: boardActions.UPDATE_BOARD,
      payload: updatedBoard,
    });
  };
};

export const deleteBoard = (boardData: Board) => {
  return async (dispatch: any) => {
    dispatch({
      type: boardActions.DELETE_BOARD,
      payload: boardData,
    });
  };
};

export const getBoardList = () => {
  return async (dispatch: any) => {
    dispatch({
      type: boardActions.GET_BOARD_LIST,
    });
  };
};
