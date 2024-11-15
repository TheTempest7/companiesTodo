import { useCallback, useEffect, useState } from "react";
import { companiesActions, INewCompany } from "06-entities/companies";
import { useAppDispatch } from "07-shared/lib/hooks.ts";

import s from "./AddCompany.module.scss";

export const AddCompany = () => {
  const dispatch = useAppDispatch();

  const [newCompanyData, setNewCompanyData] = useState<INewCompany>({
    name: "",
    address: "",
  });

  const onCompanyAddingHandler = useCallback(() => {
    if (newCompanyData.name.trim() && newCompanyData.address.trim()) {
      dispatch(companiesActions.addNewCompany(newCompanyData));
      setNewCompanyData({ name: "", address: "" });
    }
  }, [dispatch, newCompanyData]);

  const onEnterPressHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onCompanyAddingHandler();
      }
    },
    [onCompanyAddingHandler],
  );

  useEffect(() => {
    addEventListener("keypress", onEnterPressHandler);

    return () => removeEventListener("keypress", onEnterPressHandler);
  }, [newCompanyData, onEnterPressHandler]);

  return (
    <div className={s.wrapper}>
      <h2>New Company Addition</h2>
      <div>
        <p>Company Name</p>
        <input
          type={"text"}
          value={newCompanyData?.name}
          onChange={(e) =>
            setNewCompanyData({ ...newCompanyData, name: e.target.value })
          }
        />
      </div>
      <div>
        <p>Company Address</p>
        <input
          type={"text"}
          value={newCompanyData?.address}
          onChange={(e) =>
            setNewCompanyData({ ...newCompanyData, address: e.target.value })
          }
        />
      </div>
      <button onClick={onCompanyAddingHandler}>
        Add New Company To The Table
      </button>
    </div>
  );
};
