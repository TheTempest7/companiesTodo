import s from "./Table.module.scss";
import { TableItem } from "./TableItem/TableItem.tsx";
import { useEffect, useMemo, useState } from "react";
import { IChangeTableRowData } from "../../types/componentsTypes.ts";

interface ITableProps<T> {
  /* rowsData - данные для заполнения строк таблицы  */
  rowsData: T[];

  /**
   * rowChangeHandler функция изменяющая значение в ячейки таблицы
   * @param val - индификационные данные ячейки + новое значение
   */
  rowChangeHandler: (val: IChangeTableRowData) => void;

  /**
   *  setAllCheckboxes - функция задаёт значение всех чекбоксов
   * @param val - новое значение чекбокса
   */
  setAllCheckboxes: (val: boolean) => void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table = <T extends Record<string, any>>({
  rowsData,
  rowChangeHandler,
  setAllCheckboxes,
}: ITableProps<T>) => {
  const [allChecked, setAllChecked] = useState(false);

  const allUnCheckedCondition = rowsData.every((row) => row.checked === false);
  const allCheckedCondition = rowsData.every((row) => row.checked === true);

  const columns = Object.keys(rowsData[0]).slice(1, rowsData[0].length);

  const columnsWidth = useMemo(
    () => 95 / (columns.length - 1) + "%",
    [columns],
  );

  const allCheckboxesHandler = () => {
    setAllChecked((prev) => !prev);
    setAllCheckboxes(!allChecked);
  };

  useEffect(() => {
    if (allUnCheckedCondition || !allCheckedCondition) setAllChecked(false);
    if (allCheckedCondition) setAllChecked(true);
  }, [rowsData, allUnCheckedCondition, allCheckedCondition]);

  return (
    <div className={s.wrapper}>
      <div className={s.allChecked} onClick={allCheckboxesHandler}>
        <input
          type={"checkbox"}
          checked={allChecked}
          onChange={allCheckboxesHandler}
        />
        <p>Выделить всё</p>
      </div>
      <div className={s.columns}>
        {columns.map((column, index) => {
          return (
            <div
              key={index}
              className={s.column}
              style={{ flexBasis: columnsWidth }}
            >
              {column}
            </div>
          );
        })}
      </div>
      <div className={s.rows}>
        {rowsData.map((row) => {
          return (
            <TableItem
              rowData={row}
              key={row.id}
              rowChangeHandler={rowChangeHandler}
              rowsWidth={columnsWidth}
            />
          );
        })}
      </div>
    </div>
  );
};
