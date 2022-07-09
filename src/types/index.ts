export type Task = {
  id: string;
  content: string;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

export type Board = {
  id: string;
  slug: string;
  title: string;
  columns: Column[];
};

export type PartialBoard = Pick<Board, 'id' | 'title' | 'slug'>;
