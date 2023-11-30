export type tableCell = {
  getCellProps: Function;
  render: Function;
  original: { id: number };
  getRowProps: Function;
  cells: Array<any>;
};
export type table = {
  row: tableCell;
};
export type originalType = {
	id?: number;
  };