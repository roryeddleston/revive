import React, { useState } from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';

export default function Footer(props) {
  const [currYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('subscribe-form');
    if (form) form.submit();
  };

  return (
    <footer className="footer">
      <div className="inner">
        <div className='columns'>
          <div className="col col1">
            <h5 className="col-heading">{config.menuTitle}</h5>
            <nav className="col-menu">
              {config.menuItems.map((item, key) => (
                <div className="item" key={key}>
                  <a className="name" href={item.url}>{item.name}</a>
                </div>
              ))}
            </nav>
          </div>

          <div className="col col2">
            <h5 className="col-heading">{config.newsletterTitle}</h5>
            <p className='col-newsletter'>{config.newsletterText}</p>
            <form
              id="subscribe-form"
              action="YOUR_MAILCHIMP_FORM_ACTION_URL"
              method="post"
              noValidate
            >
              <div className="buttons-holder">
                <input
                  type="text"
                  name="NAME"
                  className="name-input"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="EMAIL"
                  className="email-input"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="subscribe-btn" onClick={handleSubmit}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="icons">
          <a className="icon icon1" href={config.icons[0].url} target="_blank"></a>
          <a className="icon icon2" href={config.icons[1].url}></a>
        </div>

        <div>
          <p className="copyright">
            {"© " + currYear + " Revive. We're a registered charity in England (1206393). All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}

