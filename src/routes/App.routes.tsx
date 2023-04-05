import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/App.layout";
import { routePaths } from "../config/routePaths";
import OverviewPage from "../pages/Overview.page";
import SigninPage from "../pages/Singin.page";
import SamplePage from "../pages/Sample.page";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<AppLayout />}>
        <Route index element={<Navigate to={`${routePaths.overview}`} />} />
        <Route path={routePaths.overview} element={<OverviewPage />} />
        <Route path={routePaths.sample} element={<SamplePage />} />
      </Route>
    </Routes>
  );
};
