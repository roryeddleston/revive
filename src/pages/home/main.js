import React, {useEffect, useState, useRef} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Home(props) {


    return (
        <div className="home">
            <Layout pageId={0}>

                <div className="intro-block">
                    <h2 className="heading" dangerouslySetInnerHTML={{__html:config.intro.heading}}></h2>
                    <div className="paragraphs">
                        {config.intro.body.map((paragraph, key) => {
                            return(
                                <p key={key} dangerouslySetInnerHTML={{__html:paragraph}}></p>
                            );
                        })}
                    </div>
                </div>

            </Layout>
        </div>
    )


}
