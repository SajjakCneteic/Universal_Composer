import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import UniversalComposer from '../pages/UniversalComposer';
import PrivateRoute from '../components/PrivateRoute';
import SignUp from '../pages/SignUp';
import Accordion from '../pages/Instance';
import NotFound from '../pages/NotFoundPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/instances" element={<Accordion />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/universal-composer"
        element={
          <PrivateRoute>
            <UniversalComposer />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <UniversalComposer />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
