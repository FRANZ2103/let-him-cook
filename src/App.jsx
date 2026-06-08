import React from "react";
import Chef from "../chef components/components/Chef.jsx";
import ChefHeader from "../chef components/components/ChefHeader.jsx";
import Modal from "../chef components/components/Modal.jsx";
// chef components\components\Modal.jsx

export default function App() {
  return (
    <div className="dg-root">
      <ChefHeader />
      {/* <Modal /> */}
      <Chef />
    </div>
  );
}
