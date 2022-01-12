import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import history from './history';


const AppRouter = () => {
    return (
    <Router history={history}>
        <Routes>
            <Route path="/" element={<LandingPage />} exact={true} />
            <Route path="/About" element={<AboutPage />} />
        </Routes>
    </Router>
    )
};

export default AppRouter;