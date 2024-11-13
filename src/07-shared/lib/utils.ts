export interface IObjectKeyValuesStructure {
  value: unknown;
  name: string;
}

export function convertObjectToArray(
  data: Record<string, unknown>,
): IObjectKeyValuesStructure[] {
  const result: IObjectKeyValuesStructure[] = [];
  Object.values(data).forEach((item) => {
    result.push({ value: item, name: "" });
  });
  Object.keys(data).forEach((key, index) => {
    result[index].name = key;
  });

  return result;
}
