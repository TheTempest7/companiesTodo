import s from "./App.module.scss";

import { CompaniesRowValueChange } from "05-features/companies";

const App = () => {
  return (
    <div className={s.wrapper}>
      <CompaniesRowValueChange />
    </div>
  );
};

export default App;
