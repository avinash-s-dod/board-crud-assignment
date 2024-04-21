export interface Column {
  id: string | number;
  name: string;
}

export interface Board {
  id: string | number;
  title: string;
  columns: Column[];
}

export interface BoardListProps {
  boardList: Board[];
}

export interface RootState {
  boards: BoardListProps;
}
