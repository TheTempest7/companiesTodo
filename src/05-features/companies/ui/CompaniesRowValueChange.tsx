import { companiesActions, CompaniesTable } from "06-entities/companies";
import { useAppDispatch } from "07-shared/lib/hooks.ts";
import { IChangeTableRowData } from "07-shared/types/componentsTypes.ts";
import { useCallback } from "react";

export const CompaniesRowValueChange = () => {
  const dispatch = useAppDispatch();

  const onTableRowValueChange = useCallback(
    ({ value, name, id }: IChangeTableRowData) => {
      dispatch(companiesActions.changeCompanyData({ value, name, id }));
    },
    [dispatch],
  );

  const onAllCheckedValueChange = useCallback(
    (val: boolean) => {
      dispatch(companiesActions.setAllCheckedStatus(val));
    },
    [dispatch],
  );

  const onAllCheckedValuesDelete = useCallback(() => {
    dispatch(companiesActions.deleteAllCheckedCompanies());
  }, [dispatch]);

  return (
    <CompaniesTable
      onTableRowValueChange={onTableRowValueChange}
      onAllCheckedValueChange={onAllCheckedValueChange}
      onAllCheckedValuesDelete={onAllCheckedValuesDelete}
    />
  );
};
