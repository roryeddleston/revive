import React, { useState } from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";

export default function Home(props) {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <div className="home">
      <Layout>
        <div className="intro-container">
          <div className="intro-block-1">
            <h2 className="heading" dangerouslySetInnerHTML={{ __html: config.intro.heading }}></h2>
            <div className="paragraphs">
              {config.intro.body.map((paragraph, key) => (
                <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              ))}
            </div>
          </div>
          <div className="intro-block-2">
            <img src={media.main_img} alt="Revive"/>
            <button
                className="volunteer-btn"
                dangerouslySetInnerHTML={{ __html: config.intro.buttonText }}
                onClick={() => window.location.href = config.intro.url}
            ></button>
          </div>
        </div>

        <div className="inner-content">
          <div className="story-container">
            <div className="story-block-1">
                <h2 className="heading" dangerouslySetInnerHTML={{ __html: config.story1.heading }}></h2>
                <div className="paragraphs" dangerouslySetInnerHTML={{ __html: config.story1.body }}></div>
            </div>

            <div className="story-block-2">
              <h2 className="heading" dangerouslySetInnerHTML={{ __html: config.story2.heading }}></h2>

              <div className="paragraphs">
                {config.story2.body.slice(0, 2).map((paragraph, key) => (
                  <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}

                {!showFullStory && (
                  <button className="read-more-btn" onClick={() => setShowFullStory(true)}>
                    {config.story2.buttonText}
                  </button>
                )}

                {showFullStory && (
                  <>
                    {config.story2.body.slice(2).map((paragraph, key) => (
                      <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
