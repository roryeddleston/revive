import React, {useEffect, useState} from 'react';
import './style.scss';
import media from '../../media';
import AnimationOnScroll from '../animation-on-scroll/main';

export default function Gallery(props) {
    return (
        <div className={"gallery"+(props.template?(" "+props.template):"")}>
            <div className="blocks">
                {props.content.map((block, key) => {
                    return(
                        <AnimationOnScroll key={key}>
                            <div className={"block block"+(key+1)+" block-"+((key+1)%2===0?"even":"odd")+" "+(key%2===0?"block-left":"block-right")}>
                                <div className={"block-img"}>
                                    <img src={media[block.img]} />
                                </div>

                                <a className="block-content" href={block.url}>
                                    <span className="brand" dangerouslySetInnerHTML={{__html:block.brand}}></span>
                                    <h3 className="title" dangerouslySetInnerHTML={{__html:block.title}}></h3>
                                    <div className="paragraphs-holder">
                                        {block.body.map((paragraph, key) => {
                                            return(
                                                <p key={key} dangerouslySetInnerHTML={{__html:paragraph}}></p>
                                            );
                                        })}
                                    </div>
                                    <span className="arrow"></span>
                                    <div className="overlay"></div>
                                </a>
                            </div>
                        </AnimationOnScroll>
                    );
                })}
            </div>
        </div>
    );
}
