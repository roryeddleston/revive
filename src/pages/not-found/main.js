import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";

export default function NotFound(props) {


    return (
        <div className="not-found">
            <Layout>
                <div className="inner-content">
                    <div className="intro-block">
                        <h2 className="heading" dangerouslySetInnerHTML={{__html:config.intro.heading}}></h2>

                        <div className="paragraphs">
                            {config.intro.body.map((paragraph, key) => {
                                return(
                                    <p key={key} dangerouslySetInnerHTML={{__html:paragraph}}></p>
                                );
                            })}
                        </div>

                        <div className="buttons-holder">
                            <a className="home-btn" href="/">
                                <span className="text">{config.intro.homeBtn}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
