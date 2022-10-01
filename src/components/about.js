import React from 'react';
import ProfilePhoto from '../images/Profile.jpg'
import '../sass/about.scss'


export default class extends React.Component {
    

    render(){
        const ref =  this.props.aboutRef;
        return (
            <div ref = {ref} className="about section">
                
                
                <div className = "contents">
                <h1 className="section-title"> Peter Davis </h1>
                <hr/>

                    <div className = "candidate-photo">
                        <img src = {ProfilePhoto} />
                    </div>              
                    <p>Born and raised in Kitchener-Waterloo, Peter has strong roots in our community. He has more than ten years experience volunteering with many community organizations including Ray of Hope and the Out of the Cold Program.  He is currently working as a software developer for local tech start-up company.</p>
                    <p>With degrees in Economics and International Affairs, Peter will fight for evidence based policies to resolve the challenges facing Kitchener Ward 10.</p>
                    <p>Peter values building consensus around challenging issues and will fight for policies that directly reduce the cost of housing in Kitchener.</p>
                </div>
    
            </div>
    
        )   
    }
   
}