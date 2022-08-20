import '../sass/header.scss'
import React, { useEffect, useState } from 'react';

export default function () {
    useEffect( ()=>{
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {

            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
        
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
            
            // If the frame variable has been defined, clear it now, and queue for next frame
            if (frame) { 
                cancelAnimationFrame(frame);
            }
        
            // Queue our function call for the next frame
            frame = requestAnimationFrame(() => {
                
                // Call our function and pass any params we received
                fn(...params);
            });
        
            } 
        };
  
  
        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }
        
        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });
        
        // Update scroll position for first time
        storeScroll();
    });
    
    return (
        <div className={"header"}> 
            <a target={"_blank"} href={"https://calendar.google.com/event?action=TEMPLATE&tmeid=MTBlcWI2N3F2aTFkNzFwcTJwamZqaHRjZ28gcGV0ZXIuNC5raXRjaGVuZXIuMTBAbQ&tmsrc=peter.4.kitchener.10%40gmail.com"} className="vote-callout">
                October 24th,<br/> Elect Peter for Kitchener Ward 10!
            </a>
            <div className = "menu">
                <a>Candidate</a>
                <a>Platform</a>
                <a>Contact Us</a>
            </div>           
            <div className = {"donate-button"}>
                <a className={"donor-box"} href={"https://donorbox.org/peter-for-kitchener-10?default_interval=o&amount=100"}>Donate!</a>
            </div>
        </div>
    )
}