import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { protectedRoutes } from "..";
import AuthGuard from "../../utils/guards/AuthGuard";
// import AdminLayout from '../../layout';

const AuthRoutes = () => {
  return (
    <Routes>
      {protectedRoutes?.map(({ path, element: Component }, index) => {
        return (
          <Route
            path={path}
            element={
              <AuthGuard>
                {/* <AdminLayout> */}
                <Component />
                {/* </AdminLayout> */}
              </AuthGuard>
            }
            key={index}
          />
        );
      })}
    </Routes>
  );
};
export default AuthRoutes;
