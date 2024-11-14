import s from "./TableHeader.module.scss";

interface TableHeaderProps {
  allCheckboxesHandler: () => void;
  allChecked: boolean;
  deleteRowsHandler: () => void;
  anyCheckedCondition: boolean;
}

export const TableHeader = ({
  allCheckboxesHandler,
  allChecked,
  deleteRowsHandler,
  anyCheckedCondition,
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
    </div>
  );
};
