import React from 'react';
import './style.scss';
import config from './config.json';
import Layout from "../../components/layout/main";

export default function Signposting() {
    return (
        <div className="signposting">
            <Layout pageId={3}>
                <div className="signposting-container">
                    <h1 className="page-heading">{config.signposting.heading}</h1>

                    {config.signposting.sections.map((section, index) => (
                        <div key={index} className="signposting-section">
                            <h2>{section.title}</h2>

                            {/* Single entry section (e.g., New Life Church) */}
                            {section.link && section.description && (
                                <p>
                                    <a href={section.link.url} target="_blank" rel="noopener noreferrer">
                                        {section.link.text}
                                    </a>{" "}
                                    - {section.description}
                                </p>
                            )}

                            {/* Multiple entries (e.g., Support, Sensory Products, Discounts) */}
                            {section.items && (
                                <ul>
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>
                                            <a href={item.link.url} target="_blank" rel="noopener noreferrer">
                                                {item.link.text}
                                            </a>{" "}
                                            - {item.description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    );
}