import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Gallery(props) {

    return (
        <div className="gallery">
            <Layout pageId={4}>
                <div className="gallery-container">
                    <h1 className="page-heading" dangerouslySetInnerHTML={{ __html: config.gallery.heading }}></h1>
                    <div className="paragraphs">
                    {config.gallery.body.map((paragraph, key) => {
                        return (
                        <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        );
                    })}
                    </div>
                </div>
            </Layout>
        </div>
    )
}
