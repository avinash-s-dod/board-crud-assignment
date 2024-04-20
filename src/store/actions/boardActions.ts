import { Board } from "../types";
import { boardActions } from "./actionTypes";

export const createBoard = (board: Board) => {
    return async (dispatch: any) => {
        dispatch({
            type: boardActions.CREATE_BOARD,
            payload: board
        })
    }
}

export const updateBoard = (boardId: String | Number, updatedBoard: Board) => {
    return async (dispatch: any) => {
        dispatch({
            type: boardActions.CREATE_BOARD,
            payload: { boardId, updatedBoard },
        })
    }
}
