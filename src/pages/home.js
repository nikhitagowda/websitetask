import React from 'react';

class Home extends React.Component{
    render() {
        return(
        
        <div>
                   <header>
            <div class="main">
               <div class="logo">
                   <img src='asset/assets/moneymall-logo.png'/>
               </div>
                <ul>
                     <li><a href='#'>Credit Cards</a></li>
                     <li><a href='#'>Loans</a></li>
                     <li><a href='#'>Islamic</a></li>
                     <li><a href='#'>Tool</a></li>
                     <li class="active"><a href=''>Money Guides</a></li>
                     <li><a href='#'>Log In</a></li>
                </ul>
            </div>
            <div class="title">
                <h1>Your Credit, Sorted.</h1><br/><br/>
                <h3>Check your Credit Score<br/> & Unlock your Borrowing power</h3>
                <br/><p>A better score means better deals</p>
            </div>
            <div class="button">
                <a href ='' class="btn">Enter your mobile number</a>
                <a href ='' class="btn-active">CHECK MY SCORE</a>
            </div>
            <div class="img">
                <img src="asset/assets/credit-score-background-image.png"/>
                <h4>Get Your</h4>
                <h3>AECB Credit Score</h3>
                <h1>720</h1>
                <h5>Out of 900</h5>
            </div>
            <div class="footer">
                <img src="asset/assets/google.png"/>
                <img src="asset/assets/apple.png" />
            </div>
        </header>
        </div>
        );
    }
}

export default Home;
