import SplashImage from '../images/splashCropped.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import '../sass/splash.scss'

export default function () {
    let backgroundStyle = {
        backgroundImage:'url(' + SplashImage + ')',
    }
    return (
        <div style={backgroundStyle} className="splash-outer" >
            <div className ="splash-inner" >

                <button className = "chevron-down"> 
                    <FontAwesomeIcon icon={faChevronDown}/>
                    <FontAwesomeIcon icon={faChevronDown}/>  
                </button>
            </div>
        </div>
    )

}