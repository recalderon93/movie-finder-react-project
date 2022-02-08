import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage, SearchPage } from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="movie/:movieID" element={<ProfilePage />} />
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
}
