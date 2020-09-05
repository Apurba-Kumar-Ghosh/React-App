import React from "react";
import "./App.css";
import CardEngine from "./CardEngine.js";

const App = () => {
  React.useEffect(() => {
    window.alert("Click anywhere on the card to enter the City of your choice");
  }, []);
  return (
    <div className="card-container">
      <CardEngine location="Kolkata" />
      <CardEngine location="London" />
      <CardEngine location="New York" />
    </div>
  );
};

export default App;
