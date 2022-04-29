import { useState } from "react";
import {
  Navbar,
  Services,
  Transactions,
  Footer,
  Welcome,
} from "./components/index";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
