import React, { FC } from "react";
import "./App.css";
import { ReactComponent as AlignRightIcon } from "./assets/add-solid.svg";
import { AddIcon } from "./individual-icon-components/AddIcon";

export const App: FC = () => {
  return (
    <div className="iconExamples">
      <div className="iconExample">
        <p>Manual component with SVG code inside:</p>
        <AddIcon />
      </div>
      <div className="iconExample">
        <p>Imported as ReactComponent from assets:</p>
        <AlignRightIcon />
      </div>
    </div>
  );
};
