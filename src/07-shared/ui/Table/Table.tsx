import s from "./Table.module.scss";
import { TableItem } from "./TableItem/TableItem.tsx";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { IChangeTableRowData } from "../../types/componentsTypes.ts";
import { TableHeader } from "./TableHeader/TableHeader.tsx";
import { useInView } from "react-intersection-observer";

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
interface ITableRowRequiredFields extends Record<string, any> {
  id: string | Uint8Array;
  checked: boolean;
}

export const Table = memo(
  <T extends ITableRowRequiredFields>({
    rowsData,
    columns,
    rowChangeHandler,
    setAllCheckboxes,
    deleteRowsHandler,
  }: ITableProps<T>) => {
    const { ref, inView, entry } = useInView({
      threshold: 0,
    });

    const [allChecked, setAllChecked] = useState(false);

    const allUnCheckedCondition = rowsData.every((row) => !row.checked);
    const allCheckedCondition = rowsData.every((row) => row.checked);
    const anyCheckedCondition = rowsData.some((row) => row.checked);

    const columnsWidth = useMemo(
      () => 95 / (columns.length - 1) + "%",
      [columns],
    );

    const allCheckboxesHandler = useCallback(() => {
      setAllChecked((prev) => !prev);
      setAllCheckboxes(!allChecked);
    }, [setAllChecked, setAllCheckboxes, allChecked]);

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
          firstRowInView={inView}
          referenceEntry={entry}
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
          {rowsData.map((row, index) => {
            return (
              <TableItem
                rowData={row}
                key={row.id.toString()}
                rowChangeHandler={rowChangeHandler}
                rowsWidth={columnsWidth}
                reference={!index ? ref : null}
              />
            );
          })}
          {!rowsData.length && <p className={s.noRows}>Empty Table</p>}
        </div>
      </div>
    );
  },
);
