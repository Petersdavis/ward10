import React from 'react';
import ProfilePhoto from '../images/Profile.jpg'
import '../sass/about.scss'


export default class extends React.Component {
    

    render(){
        const ref =  this.props.aboutRef;
        return (
            <div ref = {ref} className="about section">
                <h1 className="section-title"> Peter Davis </h1>
                <hr/>
                
                <div className = "contents">
                    <div className = "candidate-photo">
                        <img src = {ProfilePhoto} />
                    </div>              
                    <p>Born and raised in Kitchener-Waterloo Peter has strong roots in our community. He is currently working as a software developer for local tech start-up Voltera.</p>
                    <p>Before starting in IT, Peter completed an undergraduate degree in Economics and a master's degree in International Affairs where he studied how municipal governments can be leaders in international climate change negotiations.</p>
                    <p>Peter is entering the race for Kitchener Ward 10, because he feels that he can fight for specific policies that will directly reduce the cost of living for local residents!</p>
                </div>
    
            </div>
    
        )   
    }
   
}