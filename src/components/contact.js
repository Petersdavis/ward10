/*
fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLScugQZPQRoZYU-xugtSYumCkDBgnBgqIXZodepknKx03tsrhw/formResponse", {
  "body": "entry.268754171=test&entry.1364789300=abc&entry.719208593=Okay&dlut=1660975116929&entry.719208593_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22-2290889636859223673%22%5D&pageHistory=0&fbzx=-2290889636859223673",
  "method": "POST",
});
*/

import { useState } from "react";
import '../sass/contact.scss';

export default function() {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("")
    const [consent, setConsent] = useState("Okay");
    const [success, setSuccess] = useState(false);

    const submit = (e)=>{
        setSuccess(true);
    }   

    return (
        <div className={"contact-us section"}>
            <h1 className="section-title"> Contact Us: </h1>
            <hr/>
            <form target ={"_blank"} action={"https://docs.google.com/forms/u/1/d/e/1FAIpQLScugQZPQRoZYU-xugtSYumCkDBgnBgqIXZodepknKx03tsrhw/formResponse"}>
                <p>Email Address: </p>
                <input placeholder={"email"} name={"entry.268754171"} onChange={event => setEmail(event.target.value)}></input>
                <p>Feedback:</p>
                <textarea  rows = {3} placeholder={"feedback"} name={"entry.1364789300"} onChange={event => setFeedback(event.target.value)}></textarea>
                <p>Would you like us to contact you?</p>
                <label><input className={"radio-button"} type={"radio"} name={"entry.719208593"} value={"Okay"} onChange={event => setConsent(event.target.value)}></input>Okay.</label>
                <label><input className={"radio-button"} type={"radio"} name={"entry.719208593"} value={"No Thanks"} onChange={event => setConsent(event.target.value)}></input>No Thanks.</label>

                <button className={'submit-button'} onClick={submit}>Submit</button>

                {success == true ? (
                <div className={"success-overlay"}>
                    <h1>SUCCESS!</h1>
                    <h2>Your response has been received. </h2>
                    <button onClick={()=>{setSuccess(undefined)}}>Back</button>
                </div>
                ):[]}
            </form>

        </div>
       


    )


}
