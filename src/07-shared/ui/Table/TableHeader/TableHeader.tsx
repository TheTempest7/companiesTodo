import s from "./TableHeader.module.scss";
import { memo } from "react";

interface TableHeaderProps {
  allCheckboxesHandler: () => void;
  allChecked: boolean;
  deleteRowsHandler: () => void;
  anyCheckedCondition: boolean;
  firstRowInView: boolean;
  /**
   * referenceEntry - объект с данными об наблюдаемои элементе
   */
  referenceEntry?: IntersectionObserverEntry;
}

export const TableHeader = memo(
  ({
    allCheckboxesHandler,
    allChecked,
    deleteRowsHandler,
    anyCheckedCondition,
    firstRowInView,
    referenceEntry,
  }: TableHeaderProps) => {
    return (
      <div className={s.wrapper}>
        <div className={s.allChecked} onClick={allCheckboxesHandler}>
          <input
            type={"checkbox"}
            checked={allChecked}
            onChange={allCheckboxesHandler}
          />
          <p>Pick Out All</p>
        </div>

        {anyCheckedCondition && (
          <div className={s.actions}>
            <button onClick={deleteRowsHandler}>Delete All Checked</button>
          </div>
        )}
        {!firstRowInView && (
          <div className={s.scrollButtonWrapper}>
            {" "}
            <button
              onClick={() => {
                referenceEntry?.target.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
            >
              Scroll Up
            </button>{" "}
          </div>
        )}
      </div>
    );
  },
);
