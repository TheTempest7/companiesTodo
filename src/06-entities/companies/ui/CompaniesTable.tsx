import { Table } from "07-shared/ui/Table/Table.tsx";
import { useAppSelector } from "07-shared/lib/hooks.ts";

import { getCompanies } from "../model/selectors/selectors.tsx";
import { IChangeTableRowData } from "07-shared/types/componentsTypes.ts";

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

  const columns = ["checked", "name", "address"];

  return (
    <div>
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
