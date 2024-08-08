import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Volunteer(props) {

    return (
        <div className="volunteer">
            <Layout pageId={3}>
                <div className="volunteer-container">
                    <h2 className="heading" dangerouslySetInnerHTML={{ __html: config.volunteer.heading }}></h2>
                    <div className="paragraphs">
                    {config.volunteer.body.map((paragraph, key) => {
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
