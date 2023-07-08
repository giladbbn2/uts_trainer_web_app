import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { UserPage } from "../pages/user";
import { UserExercisesPage } from "../pages/userExercises";
import { NotFoundPage } from "../pages/notFound";
import { LoginPage } from "../pages/login";

export const DefaultRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<UserExercisesPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/user" element={<UserPage />} />
                <Route exact path="/user-exercises" element={<UserExercisesPage />} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    );          
}