import SplashImage from '../images/splashCropped.jpg'

import '../sass/splash.scss'

export default function () {
    let backgroundStyle = {
        backgroundImage:'url(' + SplashImage + ')',
    }
    return (
        <div style={backgroundStyle} className="splash-outer" >
            <div className ="splash-inner" >

            </div>
        </div>
    )

}