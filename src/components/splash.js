import SplashImage from '../images/splashCropped.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import '../sass/splash.scss'

export default function (props) {
    const aboutRef = props.aboutRef;

    const scrollTo = function(ref) {
        let el = ref.current;
    
        if(el === null) {
            return;
        }
        window.scrollTo({
          behavior: "smooth",
          left: 0,
          top: el.offsetTop - 100
        });
    }


    let backgroundStyle = {
        backgroundImage:'url(' + SplashImage + ')',
    }
    return (
        <div style={backgroundStyle} className="splash-outer" >
            <div className ="splash-inner" >

                <button onClick= {()=>{scrollTo(aboutRef)}} className = "chevron-down"> 
                    <FontAwesomeIcon icon={faChevronDown}/>
                    <FontAwesomeIcon icon={faChevronDown}/>  
                </button>
            </div>
        </div>
    )

}