import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./provider/App.provider";
import "./App.scss";
import { AppRoutes } from "./routes/App.routes";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
