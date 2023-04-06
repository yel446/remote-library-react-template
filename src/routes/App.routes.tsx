import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/App.layout";
import { routePaths } from "../config/routePaths";
import SuspenseFallback from "../components/SuspenseFallback/SuspenseFallback";

const OverviewPage = React.lazy(() => import("../pages/Overview.page"));
const SamplePage = React.lazy(() => import("../pages/Sample.page"));

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<AppLayout />}>
        <Route index element={<Navigate to={`${routePaths.overview}`} />} />
        <Route
          path={routePaths.overview}
          element={
            <React.Suspense fallback={<SuspenseFallback />}>
              <OverviewPage />
            </React.Suspense>
          }
        />
        <Route
          path={routePaths.sample}
          element={
            <React.Suspense fallback={<SuspenseFallback />}>
              <SamplePage />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
