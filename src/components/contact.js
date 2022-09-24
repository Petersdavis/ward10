/*
fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLScugQZPQRoZYU-xugtSYumCkDBgnBgqIXZodepknKx03tsrhw/formResponse", {
  "body": "entry.268754171=test&entry.1364789300=abc&entry.719208593=Okay&dlut=1660975116929&entry.719208593_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22-2290889636859223673%22%5D&pageHistory=0&fbzx=-2290889636859223673",
  "method": "POST",
});
*/
import React from 'react';
import '../sass/contact.scss';

import FacebookLogo from '../images/facebook.png';
import InstagramLogo from '../images/instagram.png';
import GmailLogo from '../images/gmail.png'
import TwitterLogo from '../images/twitter.png'
import lawnSign from '../images/lsign.png'


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            feedback:"",
            consent:"Okay",
            success:false, 
            
            l_requested: false,
            l_name: "",
            l_address: "",
            l_special:"",
        }

        this.setEmail = this.setEmail.bind(this);
        this.setFeedback = this.setFeedback.bind(this);
        this.setConsent = this.setConsent.bind(this);
        this.setSuccess = this.setSuccess.bind(this);
        this.setLAddress = this.setLAddress.bind(this);
        this.setLRequested = this.setLRequested.bind(this);
        this.setLSpecial = this.setLSpecial.bind(this);

    }

    setLRequested(l_requested){
        this.setState({l_requested});
    }

    setLAddress(l_address){
        this.setState({l_address});
    }

   
    setLName(l_name){
        this.setState({l_name});
    }

    setLSpecial(l_special){
        this.setState({l_special});

    }

    setEmail(email){
        this.setState({email})
    }
    setFeedback(feedback){
        this.setState({feedback})
    }
    setConsent(consent){
        this.setState({consent})
    }
    setSuccess(success){
        if(success=== undefined) {
            this.setState({
                email:"",
                feedback:"",
                consent:"Okay",
                success:false, 
                
                l_requested: false,
                l_name: "",
                l_address: "",
                l_special:"",
            }
        )

            return
        }

        this.setState({success})
    }
    render(){
    const ref =  this.props.contactRef;
    const {email, feedback, consent, success} = this.state;

    const submit = (e)=>{
        this.setSuccess(true);
    }   

    const {l_requested, l_address, l_name, l_special} = this.state;


    return (
        <div ref = {ref} className={"contact-us section"}>
            <div className={'contents contact-form'}>
                <img className="lawnsign-img" src={lawnSign}></img>
                <h1 className="section-title lawnsign-title"> Lawn Signs Request: </h1>
                <img className="lawnsign-img" src={lawnSign}></img>

                <label className="check-container"><h2>Sign me up!</h2> <input className="checkbox" type={"checkbox"} checked={l_requested} onChange={event=>this.setLRequested(!l_requested)}/><span className={'checkmark'}></span> </label>
                {
                    l_requested === true ? 
                    <div className = "lawn-sign-details">
                        <form  target ={"_blank"} action={"https://docs.google.com/forms/u/1/d/e/1FAIpQLSfHtDAjSua-qaIm3OF6YGODaQGxYJTmz2EUqs2lIhnUAbrP6g/formResponse"}>

                        <label> <span>Household Name:</span><input name={"entry.1727604807"} placeholder={"Name"} value={l_name} onChange={event=>this.setLName(event.target.value)}/></label>
                        <label> <span>Address:</span><input name={"entry.1194664123"} placeholder={"Address"} value={l_address} onChange={event=>this.setLAddress(event.target.value)}/></label>
                        <label> <span>Special Instructions:</span><textarea name={"entry.2027983411"} placeholder={"Special Instructions"} type={"text"} lines={"3"} value={l_special} onChange={event=>this.setLSpecial(event.target.value)}/></label>

                        <button className={'submit-button'} onClick={submit}>Submit</button>
                        </form>
                    </div> :
                    null
                }

            </div>
            
            
        

            
            <form  className={"contents contact-form"} target ={"_blank"} action={"https://docs.google.com/forms/u/1/d/e/1FAIpQLScugQZPQRoZYU-xugtSYumCkDBgnBgqIXZodepknKx03tsrhw/formResponse"}>
                <h1 className="section-title"> Contact Us: </h1>
                <hr/>
                <div className = {"col"}>

                    <p>Email Address: </p>
                    <input value={email} placeholder={"email"} name={"entry.268754171"} onChange={event => this.setEmail(event.target.value)} />
                    <p>Feedback:</p>
                    <textarea  value={feedback} rows = {3} placeholder={"feedback"} name={"entry.1364789300"} onChange={event => this.setFeedback(event.target.value)}></textarea>
                    <p>Would you like us to contact you?</p>
                    <label><input value="Okay" checked={this.state.consent === "Okay"} className={"radio-button"} type={"radio"} name={"entry.719208593"} onChange={event => this.setConsent(event.target.value)}></input>Okay.</label>
                    <label><input value="No Thanks" checked={this.state.consent === "No Thanks"} className={"radio-button"} type={"radio"} name={"entry.719208593"} onChange={event => this.setConsent(event.target.value)}></input>No Thanks.</label>

                <button className={'submit-button'} onClick={submit}>Submit</button>
                </div>
                <div className = {"col"}> 
                    <div className = {"socials"}>
                        <div className = {"social-row"}>
                            <a href={"mailto:peter.4.kitchener.10@gmail.com?subject=Campaign Feedback"} target={"_blank"}><img className = {"social-image"} src={GmailLogo}/><span>peter.4.kitchener.10@gmail.com</span></a>
                        </div>
                        <div className = {"social-row"}>
                            <a href={"https://www.facebook.com/Peter4Kitchener10"} target={"_blank"}><img className = {"social-image"} src={FacebookLogo}/><span>Facebook</span></a>
                        </div>
                        <div className = {"social-row"}>
                            <a href={"https://www.instagram.com/peter4kitchener10/"} target={"_blank"}><img className = {"social-image"} src={InstagramLogo}/><span>Instagram</span></a>
                        </div>
                        <div className = {"social-row"}>
                            <a href={"https://twitter.com/PeterDavisKW"} target={"_blank"}><img className = {"social-image"} src={TwitterLogo}/><span>Twitter</span></a>
                        </div>

                    </div>
                </div>


                {success == true ? (
                <div className={"success-overlay"}>
                    <h1>SUCCESS!</h1>
                    <h2>Your response has been received. </h2>
                    <button onClick={()=>{this.setSuccess(undefined)}}>Back</button>
                </div>
                ):[]}
            </form>

        </div>
       


    )


    }
}
