import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

export default function Volunteer(props) {

    return (
        <div className="volunteer">
            <Layout pageId={2}>
                <div className="volunteer-container">
                    <h1 className="page-heading" dangerouslySetInnerHTML={{ __html: config.volunteer.heading }}></h1>
                    <div className="paragraphs">
                    {config.volunteer.body.map((paragraph, key) => {
                        return (
                        <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        );
                    })}
                    </div>
                    <button
                        className="green-btn" id="join-team-btn"
                        dangerouslySetInnerHTML={{ __html: config.volunteer.buttonText }}
                        onClick={() => window.location.href = config.volunteer.url}
                    ></button>
                    <div className="volunteers">
                        {config.volunteer.volunteers.map((volunteer, index) => (
                            volunteer.bio && volunteer.bio.length > 0 && (
                            <div
                                key={index}
                                className={`volunteer-card ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
                            >
                                {media[volunteer.image] && (
                                <img
                                    src={media[volunteer.image]}
                                    alt={`Volunteer ${index + 1}`}
                                    className="volunteer-image"
                                />
                                )}
                                <div className="paragraphs">
                                {volunteer.bio.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                                </div>
                            </div>
                            )
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}
