import './App.css';
import { useEffect, useState } from 'react';
import Login from './Login';
// import Home from './home';
// import ShopDetails from './ShopDetails';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./home'))
const ShopDetails = lazy(() => import('./ShopDetails'))
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
                <Route element={
                  <Suspense fallback={<h1>Loading…</h1>}>
                    <Home/>
                  </Suspense>
                } path="/" exact/>
                <Route element={
                  <Suspense fallback={<h1>Loading…</h1>}>
                    <ShopDetails/>
                  </Suspense>
                } path="/shop/:id" exact/>
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
