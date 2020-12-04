import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="content">
                    <h1>Travel The <span>World</span> </h1>
                    <p>Let us take care of your travelling needs.</p>
                    <div className="cta">
                    <a href="/">EXPLORE</a>
                    </div>
                   
                </div>
            </div>
            <div className="scroll">
                <ArrowDownwardIcon style={{fontSize:40, color:"green"}} />
                
            </div>
        </div>
    )
}
