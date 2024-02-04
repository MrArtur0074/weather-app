import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "@/pages/MainPage.jsx";
import ContactPage from "@/pages/ContactPage.jsx";
import WeatherPage from "@/pages/WeatherPage.jsx";
import NonePage from "@/pages/404Page.jsx";

const Routers = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="*" element={<NonePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;