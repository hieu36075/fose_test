import { FilterProvider } from "./context/ProductContext";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <FilterProvider>
      <HomePage />
    </FilterProvider>
  );
}

export default App;
