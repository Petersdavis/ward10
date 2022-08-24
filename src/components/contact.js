/*
fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLScugQZPQRoZYU-xugtSYumCkDBgnBgqIXZodepknKx03tsrhw/formResponse", {
  "body": "entry.268754171=test&entry.1364789300=abc&entry.719208593=Okay&dlut=1660975116929&entry.719208593_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22-2290889636859223673%22%5D&pageHistory=0&fbzx=-2290889636859223673",
  "method": "POST",
});
*/
import React from 'react';
import '../sass/contact.scss';


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            feedback:"",
            consent:"Okay",
            success:false        
        }

        this.setEmail = this.setEmail.bind(this);
        this.setFeedback = this.setFeedback.bind(this);

        this.setConsent = this.setConsent.bind(this);

        this.setSuccess = this.setSuccess.bind(this);

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
        this.setState({success})
    }
    render(){
    const ref =  this.props.contactRef;
    const {email, feedback, consent, success} = this.state;

    const submit = (e)=>{
        this.setSuccess(true);
    }   

    return (
        <div ref = {ref} className={"contact-us section"}>
            <h1 className="section-title"> Contact Us: </h1>
            <hr/>
            <form target ={"_blank"} action={"https://docs.google.com/forms/u/1/d/e/1FAIpQLScugQZPQRoZYU-xugtSYumCkDBgnBgqIXZodepknKx03tsrhw/formResponse"}>
                <p>Email Address: </p>
                <input value={email} placeholder={"email"} name={"entry.268754171"} onChange={event => this.setEmail(event.target.value)}></input>
                <p>Feedback:</p>
                <textarea  value={feedback} rows = {3} placeholder={"feedback"} name={"entry.1364789300"} onChange={event => this.setFeedback(event.target.value)}></textarea>
                <p>Would you like us to contact you?</p>
                <label><input value={consent} className={"radio-button"} type={"radio"} name={"entry.719208593"} onChange={event => this.setConsent(event.target.name)}></input>Okay.</label>
                <label><input value={consent} className={"radio-button"} type={"radio"} name={"entry.719208593"} onChange={event => this.setConsent(event.target.name)}></input>No Thanks.</label>

                <button className={'submit-button'} onClick={submit}>Submit</button>

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
