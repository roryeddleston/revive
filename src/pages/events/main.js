import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Events(props) {

    return (
        <div className="events">
            <Layout pageId={0}>
                <div className="events-container">
                    <h1 className="page-heading" dangerouslySetInnerHTML={{ __html: config.events.heading }}></h1>
                    <div className="paragraphs">
                    {config.events.body.map((paragraph, key) => {
                        return (
                        <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        );
                    })}
                    </div>
                    <div className="image-block-1">
                        <img src={media.events_poster} alt="Revive"/>
                    </div>
                    <div className="image-block-2">
                        <img src={media.revive_poster} alt="Revive"/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
