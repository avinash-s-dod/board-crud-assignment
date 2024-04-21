import { Board } from "../store/types";

export const generateUniqueId = (boardList: Board[]): number => {
  if (boardList.length === 0) {
    return 1;
  }
  const maxId = Math.max(...boardList.map(board => parseInt(String(board.id))));
  return maxId + 1;
};
