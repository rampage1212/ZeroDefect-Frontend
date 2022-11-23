import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "..";

const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes?.map(({ path, element: Component }, index) => {
        return <Route path={path} element={<Component />} key={index} />;
      })}
    </Routes>
  );
};

export default PublicRoutes;
