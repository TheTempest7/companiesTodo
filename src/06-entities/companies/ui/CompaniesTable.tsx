import { Table } from "07-shared/ui/Table/Table.tsx";
import { useAppSelector } from "07-shared/lib/hooks.ts";

import { getCompanies } from "../model/selectors/selectors.tsx";
import { IChangeTableRowData } from "07-shared/types/componentsTypes.ts";

interface CompaniesTableProps {
  onTableRowValueChange: (val: IChangeTableRowData) => void;
  onAllCheckedValueChange: (val: boolean) => void;
}

export const CompaniesTable = ({
  onTableRowValueChange,
  onAllCheckedValueChange,
}: CompaniesTableProps) => {
  const companies = useAppSelector(getCompanies);

  return (
    <div>
      <Table
        rowsData={companies}
        rowChangeHandler={onTableRowValueChange}
        setAllCheckboxes={onAllCheckedValueChange}
      />
    </div>
  );
};
