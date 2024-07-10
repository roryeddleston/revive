import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';

export default function Footer(props) {
    const [currYear, setCurrYear] = useState(new Date().getFullYear());

    return (
        <footer className="footer">
            <div className="inner">
                <div className='columns'>
                    <div className="col col1">
                            <h5 className="col-heading">{config.menuTitle}</h5>
                            <nav className="col-menu">
                                {config.menuItems.map((item, key) => {
                                    return(
                                        <a className="item" key={key} href={item.url}>
                                            <span className="name">{item.name}</span>
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>

                    <div className="col col2">
                        <h5 className="col-heading">{config.contact}</h5>
                        {/* <div className="col-address" dangerouslySetInnerHTML={{__html:config.address}}></div> */}
                        <div className="col-address">
                            {config.address.body.map((paragraph, key) => {
                                return(
                                    <p key={key} dangerouslySetInnerHTML={{__html:paragraph}}></p>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col col3">
                        <h5 className="col-heading">{config.newsletterTitle}</h5>
                        <p className='col-newsletter'>{config.newsletterText}</p>
                        <div className="buttons-holder">
                            <span className="subscribe-btn">
                                <input type="text-input" placeholder={config.subscribeBtn} />
                                <span className="arrow"></span>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="icons">
                    <a className="icon icon1" href={config.icons[0].url} target="_blank"></a>
                </div>

                <div>
                    <p className="copyright">{"© "+currYear+" revive"}</p>
                </div>
            </div>
        </footer>
    )
}
