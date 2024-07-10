import React, {useState, useEffect} from 'react';
import './style.scss';
import media from '../../media';

export default function Slider(props) {
    const [slides, setSlides] = useState(props.children);
    const [currSlide, setCurrSlide] = useState(1);
    const [currDuration, setCurrDuration] = useState(0);
    const [clearFirstPending, setClearFirstPending] = useState(false);
    const [clearLastPending, setClearLastPending] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    //Clear extra slides on slides update
    useEffect(() => {
        if (clearFirstPending) {
            clearFirstSlide();
        }
        if (clearLastPending) {
            clearLastSlide();
        }
    }, [slides]);

    return (
        <div className="slider">
            <div className="nav-btns">
                <div className="prev-btn" onClick={()=>{onPrevClick();}}>
                    <div className="inner-area">
                        <span className="arrow"></span>
                    </div>
                </div>
                <div className="next-btn" onClick={()=>{onNextClick();}}>
                    <div className="inner-area">
                        <span className="arrow"></span>
                    </div>
                </div>
            </div>

            <div className="masker">
                <div className="slides" style={{left:-(props.slideWidth+props.slideGap)*(currSlide-1)+"px", transition:"left "+currDuration+"s"}}>
                    {slides.map((slide, key) => {
                        return (
                            <div className={`slide slide${key+1}`} style={{width:(props.slideWidth+props.slideGap)+"px", paddingRight:props.slideGap+"px"}} key={key}>{slide}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    );

    function clearFirstSlide() {
        var temp = [...slides];

        setTimeout(()=>{
            temp.shift(); //Remove first slide
            setSlides(temp);
            setCurrSlide(1);
            setCurrDuration(0);
            setClearFirstPending(false);
        }, 500);
    }

    function clearLastSlide() {
        var temp = [...slides];

        setCurrSlide(currSlide-1);
        setCurrDuration(0.5);

        setTimeout(()=>{
            temp.pop(); //Remove last slide
            setSlides(temp);
            setClearLastPending(false);
        }, 500);
    }

    function onPrevClick() {
        if (clearFirstPending || clearLastPending) {
            return;
        }

        var temp = [...slides];

        temp.unshift(temp[slides.length-1]); //Add last slide at the start

        setClearLastPending(true);
        setSlides(temp);
        setCurrSlide(currSlide+1);
        setCurrDuration(0);
    }

    function onNextClick() {
        if (clearFirstPending || clearLastPending) {
            return;
        }

        var temp = [...slides];

        temp.push(temp[0]); //Add first slide at the end

        setClearFirstPending(true);
        setSlides(temp);
        setCurrSlide(currSlide+1);
        setCurrDuration(0.5);
    }
}
