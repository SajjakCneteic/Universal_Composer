import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import UniversalComposer from '../pages/UniversalComposer';
import PrivateRoute from '../components/PrivateRoute';
import SignUp from '../pages/SignUp';
import Accordion from '../pages/Accordion';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/accordion" element={<Accordion />} />
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
