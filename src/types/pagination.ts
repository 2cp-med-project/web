export type FilterAttributes = {
  search: string;
};

export type PaginationAttributes = FilterAttributes & {
  page: number;
  pageSize: number;
  search: string;
};

export type Page<TItem = unknown> = {
  data: TItem[];
  nextPage: number | null;
  count: number;
};
