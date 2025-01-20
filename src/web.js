import React, {useEffect, useState} from 'react';
import './styles/general.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/home/main";
import Events from "./pages/events/main";
import Trustees from "./pages/trustees/main";
import Volunteer from "./pages/volunteer/main";
import Signposting from "./pages/signposting/main";
import Gallery from "./pages/gallery/main";
import Resources from "./pages/resources/main";
import Policies from "./pages/policies/main";
import Contact from "./pages/contact/main";
import Giving from "./pages/giving/main";
import NotFound from "./pages/not-found/main";


export default function Web() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />}/>
                <Route path="trustees" element={<Trustees />}/>
                <Route path="volunteer" element={<Volunteer />}/>
                <Route path="signposting" element={<Signposting />}/>
                <Route path="gallery" element={<Gallery />}/>
                <Route path="resources" element={<Resources />}/>
                <Route path="policies" element={<Policies />}/>
                <Route path="contact" element={<Contact />} />
                <Route path="giving" element={<Giving />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
