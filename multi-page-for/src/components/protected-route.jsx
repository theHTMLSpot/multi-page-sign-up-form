// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigation } from './navigation-context';

const ProtectedRoute = ({ element, step }) => {
  const { currentStep } = useNavigation();

  if (currentStep < step) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;