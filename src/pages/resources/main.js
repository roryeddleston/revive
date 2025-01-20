import React from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";

export default function Resources(props) {
  return (
    <div className="resources">
      <Layout pageId={5}>
        <div className="resources-container">
          <h1
            className="page-heading"
            dangerouslySetInnerHTML={{ __html: config.resources.heading }}
          ></h1>
          <div className="paragraphs">
            {config.resources.body.map((paragraph, key) => (
              <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </div>

          <button
            className="green-btn" id="resources-btn"
            dangerouslySetInnerHTML={{ __html: config.resources.buttonText }}
            onClick={() => window.open('/activity-packs.pdf', '_blank')}
          ></button>

          <div className="image-grid">
            {config.resources.images.map((image, index) => (
              <img
                key={index}
                src={media[image.src]}
                alt={image.alt}
                className={`image-item ${
                  index % 3 === 0 ? 'large' : index % 4 === 0 ? 'medium' : 'small'
                }`}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}