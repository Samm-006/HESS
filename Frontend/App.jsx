import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ModuleOrganizer from "./pages/ModuleOrganizer";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute";
import MarkersPage from "./pages/MarkersPage";
import PersonalizedFeedback from "./pages/PersonalizedFeedback";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Logout() {
  localStorage.clear()
  return <Navigate to = "/login"/>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = "/"
          element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute> 
          }
        />
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/logout" element = {<Logout/>}/>
        <Route path = "/moduleOrganizer" element = {<ModuleOrganizer/>}/>
        <Route path = "/student" element = {<PersonalizedFeedback/>}/>
        <Route path = "/marker" element = {<MarkersPage/>}/>
        <Route path ="*" element = {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
