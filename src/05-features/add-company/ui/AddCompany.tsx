import { useState } from "react";
import { companiesActions, INewCompany } from "06-entities/companies";
import { useAppDispatch } from "07-shared/lib/hooks.ts";

export const AddCompany = () => {
  const dispatch = useAppDispatch();

  const [newCompanyData, setNewCompanyData] = useState<INewCompany>({
    name: "",
    address: "",
  });

  const onCompanyAddingHandler = () => {
    if (newCompanyData.name.trim() && newCompanyData.address.trim()) {
      dispatch(companiesActions.addNewCompany(newCompanyData));
      setNewCompanyData({ name: "", address: "" });
    }
  };

  return (
    <div>
      <h2>New Company Addition</h2>
      <div>
        <p>Company Name</p>
        <input
          style={{ background: "azul" }}
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
