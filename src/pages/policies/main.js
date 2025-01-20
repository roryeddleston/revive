import React from 'react';
import './style.scss';
import config from './config.json';
import Layout from "../../components/layout/main";
import { FaFilePdf } from "react-icons/fa";  // Import PDF icon

export default function Policies() {
    return (
        <div className="policies">
            <Layout>
                <div className="policies-container">
                    <h1 className="page-heading" dangerouslySetInnerHTML={{ __html: config.policies.heading }}></h1>
                    <div className="paragraphs">
                        {config.policies.body.map((paragraph, key) => (
                            <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        ))}
                    </div>

                    {/* Policy List */}
                    <div className="policy-list">
                        {config.policies.list.map((policy, index) => (
                            <div
                                key={index}
                                className="policy-card"
                                onClick={() => {
                                    if (policy.file) {
                                        window.open(policy.file, "_blank");
                                    }
                                }}
                                style={{ cursor: policy.file ? "pointer" : "default" }}
                            >
                                <FaFilePdf className="policy-icon" />  {/* PDF Icon */}
                                <div className="policy-info">
                                    <h3 className="policy-title">{policy.name}</h3>
                                    <p className="policy-description">{policy.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    );
}