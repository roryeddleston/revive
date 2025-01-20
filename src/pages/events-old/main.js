import React from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";

export default function Events(props) {
  return (
    <div className="events">
      <Layout pageId={0}>
        <div className="events-container">

          <div className="events-block-1">
            <img src={media.events_img} alt="Intro SVG" />
          </div>
          <div className="events-block-2">
            <div className="events-heading">
              <h2><span>Join us</span> on one of our events!</h2>
            </div>
            <div className="events-list-container">
              {config.events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                  <button className="book-now-btn">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

