import Directory from "./components/directory/directory.component";

import { categories } from "./category-menu";
const App = () => {
  return <Directory categories={categories} />;
};

export default App;
