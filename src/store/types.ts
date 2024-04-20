export interface Column {
  id: string;
  name: string;
}

export interface Board {
  id: string;
  title: string;
  columns: Column[];
}

export interface BoardListProps {
  boardList: Board[];
}
