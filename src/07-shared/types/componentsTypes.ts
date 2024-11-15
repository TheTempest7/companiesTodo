export interface IChangeTableRowData {
  name: string;
  value: string | boolean;
  id: Uint8Array | string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ITableRowRequiredFields extends Record<string, any> {
  id: string | Uint8Array;
  checked: boolean;
}
