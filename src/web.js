import React, {useEffect, useState} from 'react';
import './styles/general.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/home/main";
import Events from "./pages/events/main";
import Trustees from "./pages/trustees/main";
import Volunteer from "./pages/volunteer/main";
import Contact from "./pages/contact/main";
import NotFound from "./pages/not-found/main";


export default function Web() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />}/>
                <Route path="trustees" element={<Trustees />}/>
                <Route path="volunteer" element={<Volunteer />}/>
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
