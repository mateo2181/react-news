import React from "react";
import Button from "../containers/Button";
import TopNews from "../containers/TopNews";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="w-100 bg-gray-300 min-h-screen p-2">
      <Navbar />
      <TopNews />
    </div>
  );
};
export default App;
