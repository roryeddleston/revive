import React, {useEffect, useState} from 'react';
import './style.scss';
import config from './config.json';
import media from '../../media';

export default function Topbar(props) {
    const [showPanel, setShowPanel] = useState(false);

    useEffect(() => {

        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener("resize", onWindowResize);
        }
    }, []);

    return (
        <div className="topbar">
            <div className="inner">
                <a className="logo" href="/"></a>

                <nav className="tabs">
                    {config.tabs.map((tab, key) => {
                        return(
                            <a className={"tab"+(props.pageId===key?" active":"")} key={key} href={tab.url}>{tab.name}</a>
                        );
                    })}
                </nav>
            </div>

            <div className={"overlay"+(showPanel?" open":"")}>
                <div className="panel">
                    <nav className="tabs">
                        {config.tabs.map((tab, key) => {
                            return(
                                <a className={"tab"+(props.pageId===key?" active":"")} key={key} href={tab.url}>
                                    <span className="text">{tab.name}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <a className={"menu-btn"+(showPanel?" active":"")} onClick={onMenuClick}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </a>
        </div>
    )

    function onMenuClick(e) {
        e.preventDefault();

        if (showPanel) {
            setShowPanel(false);
        }
        else {
            setShowPanel(true);
        }
    }

    function onWindowResize() {
        setShowPanel(false);
    }
}
