import React, { FC } from "react";
import "./App.css";
import { ReactComponent as AlignCenterIcon } from "./assets/align-center.svg";
import { ReactComponent as AlignJustifyIcon } from "./assets/align-justify.svg";
import { ReactComponent as AlignRightIcon } from "./assets/align-left.svg";
import { Icon } from "./icon";
import { AddIcon } from "./individual-icon-components/AddIcon";
import { AddressBookIcon } from "./individual-icon-components/AddressBookIcon";
import { AlarmClockIcon } from "./individual-icon-components/AlarmClockIcon";

export const App: FC = () => {
  return (
    <div className="container">
      <div className="example">
        <p>Manual component with SVG code inside:</p>
        <div className="icons-container">
          <AddIcon />
          <AddressBookIcon />
          <AlarmClockIcon />
        </div>
      </div>
      <div className="example">
        <p>Imported as ReactComponent from assets:</p>
        <div className="icons-container">
          <AlignRightIcon />
          <AlignCenterIcon />
          <AlignJustifyIcon />
        </div>
      </div>
      <div className="example">
        <p>Dynamic SVG Icon component:</p>
        <div className="icons-container">
          <Icon icon="AlarmClock" />
          <Icon icon="AddressBook" />
          <Icon icon="Add" />
        </div>
      </div>
    </div>
  );
};
