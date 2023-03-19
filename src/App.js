import { useContext } from "react";
import "./App.css";
import Content from "./components/Content";
import Home from "./components/Home";
import { AppContext } from "./context/AppContext";

function App() {
  const { state } = useContext(AppContext);
  return (
    <div className="app">
      <Home />
      <Content route={state.route} />
    </div>
  );
}

export default App;
