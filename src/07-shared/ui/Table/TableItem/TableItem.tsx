import s from "./TableItem.module.scss";
import { convertObjectToArray } from "07-shared/lib/utils.ts";
import { IChangeTableRowData } from "../../../types/componentsTypes.ts";

interface TableItemProps {
  rowData: Record<string, string | Uint8Array>;
  rowChangeHandler: (val: IChangeTableRowData) => void;
  key: string;
  rowsWidth: string;
}

export const TableItem = ({
  rowData,
  rowChangeHandler,
  rowsWidth,
}: TableItemProps) => {
  const rowItems = convertObjectToArray(rowData);

  return (
    <div className={s.wrapper}>
      {rowItems.slice(1, rowItems.length).map(({ value, name }, index) => {
        if (name === "checked") {
          return (
            <div className={s.inputWrapper} key={index}>
              <input
                type={"checkbox"}
                checked={!!value}
                onChange={() => {
                  rowChangeHandler({
                    value: !value,
                    name: name.toString(),
                    id: rowData.id,
                  });
                }}
              />
            </div>
          );
        }
        return (
          <div
            className={s.inputWrapper}
            style={{ flexBasis: rowsWidth }}
            key={index}
          >
            <input
              type={"text"}
              value={typeof value === "string" ? value : ""}
              onChange={(e) => {
                rowChangeHandler({
                  value: e.target.value,
                  name,
                  id: rowData.id,
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
