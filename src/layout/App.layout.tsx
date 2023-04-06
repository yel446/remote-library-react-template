import React from "react";
import { Outlet } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import "./App.layout.styles.scss";
import { menu } from "../config/menu";
import { LIBRARY_VERSION } from "../config/constants";

const AppLayout: React.FC = () => {
  return (
    <div className="l-app">
      <div className="l-app__sidenav">
        <div className="l-app__sidenav__top-part">
          <h3 style={{ fontWeight: "400" }}> Custom Library </h3>
        </div>

        {menu.map((elt, index) => {
          return (
            <NavLink
              key={index}
              to={elt.route}
              title={elt.label}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {elt.label}
            </NavLink>
          );
        })}
      </div>
      <div className="l-app__content-part">
        <div className="l-app__content-part__header">
          <InlineIcon
            icon="material-symbols:menu-open-rounded"
            style={{ fontSize: "2rem", color: "var(--ui-gray)" }}
          />
          <p style={{ marginLeft: "auto" }}>
            Version <b>{LIBRARY_VERSION || "1.0.0"}</b>
          </p>
        </div>
        <div className="l-app__content-part__body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
