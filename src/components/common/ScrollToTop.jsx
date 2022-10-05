import React, { useEffect, useState } from "react";
import { FaAngleUp } from 'react-icons/fa';
import '../../styles/index.css';

const ScrollToTop = () =>{
    const [showTopBtn, setShowTopBt] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 400){
                setShowTopBt(true)
            }else{
                setShowTopBt(false)
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }
    return(
        <div className="top-to-btm">
            {" "}
            {showTopBtn}
            <FaAngleUp className="icon-position icon-style" onClick={goToTop}/>
        </div>
    )
}
export default ScrollToTop
