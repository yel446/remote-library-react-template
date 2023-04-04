import React from "react";
import { Outlet } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import "./App.layout.styles.scss";

const AppLayout: React.FC = () => {
  return (
    <div className="l-app">
      <div className="l-app__sidenav">
        <div className="l-app__sidenav__top-part">
          <h3 style={{ fontWeight: "400" }}> Custom Library </h3>
        </div>
      </div>
      <div className="l-app__content-part">
        <div className="l-app__content-part__header">
          <InlineIcon
            icon="material-symbols:menu-open-rounded"
            style={{ fontSize: "2rem", color: "var(--ui-gray)" }}
          />
        </div>
        <div className="l-app__content-part__body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
