import React from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Trustees(props) {
    return (
        <div className="trustees">
            <Layout pageId={2}>
                <div className="trustees-container">
                    <h1>{config.trusteesTitle}</h1>
                    <div className="paragraphs">
                        {config.trusteesText.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="trustees-cards">
                        {config.trustees.map((trustee, index) => (
                            <div key={index} className="trustee-card">
                                <img src={trustee.image} alt={trustee.name} className="trustee-image"/>
                                <h3 className="trustee-name">{trustee.name}</h3>
                                <p className="trustee-bio">{trustee.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}
