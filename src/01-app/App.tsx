import s from "./App.module.scss";

import { CompaniesRowValueChange } from "05-features/companies";
import { AddCompany } from "05-features/add-company";

const App = () => {
  return (
    <div className={s.wrapper}>
      <AddCompany />
      <CompaniesRowValueChange />
    </div>
  );
};

export default App;
