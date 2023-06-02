import { Dashboard } from "./components/Dashboard";
import { Summary } from "./components/Summary";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Summary/>
    </div>
  );
}

