import { companiesActions, CompaniesTable } from "06-entities/companies";
import { useAppDispatch } from "07-shared/lib/hooks.ts";
import { IChangeTableRowData } from "07-shared/types/componentsTypes.ts";

export const CompaniesRowValueChange = () => {
  const dispatch = useAppDispatch();

  const onTableRowValueChange = ({ value, name, id }: IChangeTableRowData) => {
    dispatch(companiesActions.changeCompanyData({ value, name, id }));
  };

  const onAllCheckedValueChange = (val: boolean) => {
    dispatch(companiesActions.setAllCheckedStatus(val));
  };
  return (
    <CompaniesTable
      onTableRowValueChange={onTableRowValueChange}
      onAllCheckedValueChange={onAllCheckedValueChange}
    />
  );
};
