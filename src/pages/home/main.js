// src/Home.js

import React from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import TypingAnimation from '../../components/typing-animation/main';

export default function Home(props) {
  return (
    <div className="home">
      <Layout pageId={0}>
        <div className="intro-container">
          <div className="intro-block-1">
            {/* <TypingAnimation text="We are Revive!" tag="h2" className="heading"/> */}
            <h2 className="heading" dangerouslySetInnerHTML={{ __html: config.intro.heading }}></h2>
            <div className="paragraphs">
              {config.intro.body.map((paragraph, key) => {
                return (
                  <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                );
              })}
            </div>
          </div>
          <div className="intro-block-2">
            <img src={media.main_img} alt="Intro SVG"/>
            <button className="donate-btn">Donate</button>
          </div>
        </div>
      </Layout>
    </div>
  );
}



