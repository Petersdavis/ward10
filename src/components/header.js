import '../sass/header.scss'
import { useEffect, useState } from 'react';

export default function () {
    const [offset, setOffset] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(120);
    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset)
            console.log(window.pageYOffset)
            if(window.pageYOffset > 100) {
                setHeaderHeight(100)
            } else {
                setHeaderHeight(120)
            }
        };
        
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    console.log(headerHeight);

    return (
        <div style={{height:headerHeight}} className={"header"}> 
        {
        offset > 100 ?
            (
            <div className={"menuLeft"}>
                <button className="vote-callout">
                    Vote <br/>for <br/> Peter
                </button>
                <div className = {"donate-button"}>
                    Donate
                </div>
            </div>
            ) : (
                <div className={"menu"}>
                    <a>Meet Peter</a>
                    <a>Our Platform</a>
                    <a>Contact Us</a>
                </div>
            )
        }   
        </div>
    )
}