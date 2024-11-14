import s from "./Table.module.scss";
import { TableItem } from "./TableItem/TableItem.tsx";
import { useEffect, useMemo, useState } from "react";
import { IChangeTableRowData } from "../../types/componentsTypes.ts";
import { TableHeader } from "./TableHeader/TableHeader.tsx";

interface ITableProps<T> {
  /* rowsData - данные для заполнения строк таблицы  */
  rowsData: T[];

  /* columns - колоники для таблицы */
  columns: string[];

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

  /**
   * deleteRowsHandler - функция срабатывающая на кнопку delete
   */
  deleteRowsHandler: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table = <T extends Record<string, any>>({
  rowsData,
  columns,
  rowChangeHandler,
  setAllCheckboxes,
  deleteRowsHandler,
}: ITableProps<T>) => {
  const [allChecked, setAllChecked] = useState(false);

  const allUnCheckedCondition = rowsData.every((row) => row.checked === false);
  const allCheckedCondition = rowsData.every((row) => row.checked === true);
  const anyCheckedCondition = rowsData.some((row) => row.checked === true);

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
    if (allCheckedCondition && rowsData.length) setAllChecked(true);
    if (!rowsData.length) setAllChecked(false);
  }, [rowsData, allUnCheckedCondition, allCheckedCondition]);

  return (
    <div className={s.wrapper}>
      <TableHeader
        allCheckboxesHandler={allCheckboxesHandler}
        allChecked={allChecked}
        deleteRowsHandler={deleteRowsHandler}
        anyCheckedCondition={anyCheckedCondition}
      />
      <div className={s.columns}>
        {columns.map((column, index) => {
          return (
            <div
              key={index}
              className={s.column}
              style={{ flexBasis: columnsWidth }}
            >
              <span>{column}</span>
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
        {!rowsData.length && <p className={s.noRows}>Empty Table</p>}
      </div>
    </div>
  );
};
