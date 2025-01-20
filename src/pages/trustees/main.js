import React from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Trustees() {
    return (
        <div className="trustees">
            <Layout pageId={1}>
                <div className="trustees-container">
                    <h1 className="page-heading">{config.trusteesTitle}</h1>
                    <div className="trustees-cards">
                        {config.trustees.map((trustee, index) => (
                            <div key={index} className={`trustee-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                                <img src={media[trustee.image]} alt={trustee.name} className="trustee-image" />
                                <div className="trustee-bio">
                                    {trustee.name.map((namePart, i) => (
                                            <h2 key={i}>{namePart}</h2>
                                    ))}
                                    <p>{trustee.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    );
}
