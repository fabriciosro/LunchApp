import React  from 'react';

import './PollOk.css';

import logo from '../assets/logo.svg';

export default function PollOk() {
    return (
        <div className="pollok-container">
            <form>
                <img src={logo} alt='WhereLunch'/>
                <h1>Thanks for your vote! </h1> 
            </form>            
        </div>        
    );
}