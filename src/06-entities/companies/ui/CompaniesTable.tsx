import Table from "07-shared/ui/Table/Table.tsx";
import { useAppSelector } from "07-shared/lib/hooks.ts";
import { IChangeTableRowData } from "07-shared/types/componentsTypes.ts";

import { getCompanies } from "../model/selectors/selectors.tsx";

import s from "./CompaniesTable.module.scss";

interface CompaniesTableProps {
  onTableRowValueChange: (val: IChangeTableRowData) => void;
  onAllCheckedValueChange: (val: boolean) => void;
  onAllCheckedValuesDelete: () => void;
}

export const CompaniesTable = ({
  onTableRowValueChange,
  onAllCheckedValueChange,
  onAllCheckedValuesDelete,
}: CompaniesTableProps) => {
  const companies = useAppSelector(getCompanies);

  const columns = ["checked", "company", "address"];

  return (
    <div className={s.wrapper}>
      <Table
        rowsData={companies}
        columns={columns}
        rowChangeHandler={onTableRowValueChange}
        setAllCheckboxes={onAllCheckedValueChange}
        deleteRowsHandler={onAllCheckedValuesDelete}
      />
    </div>
  );
};
