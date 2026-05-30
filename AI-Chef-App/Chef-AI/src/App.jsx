import React from "react";
import Chef from "../chef components/components/Chef.jsx";
import ChefHeader from "../chef components/components/ChefHeader.jsx";

export default function App() {
  return (
    <div className="dg-root">
      <ChefHeader />
      <Chef />
    </div>
  );
}
