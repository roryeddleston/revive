import React, {useState, useEffect, useRef} from 'react';
import './style.scss';
import media from '../../media';


export default function AnimationOnScroll(props) {
    const [show, setShow] = useState(false);

    const refElement = useRef(null);

    //On component mount
    useEffect(() => {
        //Checks when to start animation
        checkElementVisibility();
        window.addEventListener("scroll", checkElementVisibility, false);  

        //Kill listener on component unmount
        return ()=> {
            window.removeEventListener("scroll", checkElementVisibility);
        }
    }, []);

    return (
        <div className={"animation-on-scroll"+(show?" show":"")} ref={refElement}>
            {props.children}
        </div>
    );

    function checkElementVisibility() {
        var isVisible = isElementInViewport(refElement.current, props.offset?props.offset:100);

        if (isVisible===true && show===false) {
            setShow(true);
        }
    }

    function isElementInViewport(el, offset) {
        var rect = el.getBoundingClientRect();

        return rect.top+offset <= (window.innerHeight || document.documentElement.clientHeight);
    }
}
