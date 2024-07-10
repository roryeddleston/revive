import React, {useState, useEffect, useRef} from 'react';
import './style.scss';
import media from '../../media';

export default function Accordion(props) {
    const [activeBars, setActiveBars] = useState(new Array(props.bars.length).fill(false));
    const [activeHeights, setActiveHeights] = useState(new Array(props.bars.length).fill(0));

    const refAccordion = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', onWindowResize); //Updates reveal height when resizing window

        return () => {
            window.removeEventListener("resize", onWindowResize);
        }
    }, []);

    return (
        <div className="accordion" ref={refAccordion}>
            {props.bars.map((bar, key) => {
                return (
                    <div className={`bar bar${key+1} ${activeBars[key]?"active":""}`} key={key}>
                        <div className="heading" onClick={()=>onHeadingClick(key)}>
                            <span className="title">{bar}</span>
                            <span className="arrow"></span>
                        </div>
                        <div className="reveal" style={{height:activeHeights[key]+"px"}}>
                            <div className="height-wrapper">
                                {props.children[key]}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );

    function revealBar(barId) {
        var currRevealHeight = Math.ceil(refAccordion.current.children[barId].lastChild.firstChild.getBoundingClientRect().height); //better than getComputedStyle because it's more consistent with IE11
        var tempActive = [...activeBars];
        var tempHeights = [...activeHeights];

        if (props.type==="multiple") {
            tempActive[barId] = !tempActive[barId];
            tempHeights[barId] = tempActive[barId] ? currRevealHeight : 0;
        }
        else {
            for (let i=0; i<props.bars.length; i++) {
                if (i===barId) {
                    tempActive[i] = !tempActive[i];
                    tempHeights[i] = tempActive[i] ? currRevealHeight : 0;
                }
                else {
                    tempActive[i] = false;
                    tempHeights[i] = 0;
                }
            }
        }

        //Update state
        setActiveBars(tempActive);
        setActiveHeights(tempHeights);
    }

    function closeAllBars() {
        setActiveBars(new Array(props.bars.length).fill(false));
        setActiveHeights(new Array(props.bars.length).fill(0));
    }

    function onHeadingClick(barId) {
        revealBar(barId);
    }

    function onWindowResize() {
        closeAllBars();
    }
}
