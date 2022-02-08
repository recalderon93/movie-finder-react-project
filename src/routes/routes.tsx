import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage, SearchPage } from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="SearchPage" element={<SearchPage />} />
      <Route path="movie/:movieID" element={<ProfilePage />} />
    </Routes>
  );
}
