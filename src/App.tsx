import "./App.css";
import Header from "./components/sharedComponents/Header";
import SideBar from "./components/sharedComponents/SideBar";
import Dashboard from "./features/dashboard";

function App() {
  return (
    <div>
      <SideBar />
      <div className="pl-20">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
