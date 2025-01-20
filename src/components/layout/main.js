import React, {useEffect, useState} from 'react';
import './style.scss';
import media from '../../media';
import Topbar from "../topbar/main";
import Footer from "../footer/main";

export default function Layout(props) {
    return (
        <div className="layout">
            <Topbar pageId={props.pageId}/>

            <div className="content">
                {props.children}

            </div>

            <Footer />
        </div>
    )
}
