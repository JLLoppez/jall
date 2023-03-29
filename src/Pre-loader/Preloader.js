import React from 'react-dom';

import './Preloader.css';
import { Component } from 'react';

class  Preloader extends Component () {

    preloader() {
        let preload = document.querySelector(".preloader");
        setTimeout(() => {
          preload.style.opacity = "0";
          setTimeout(() => {
            preload.style.display = "none";
          }, 1000);
        }, 3000);
    }
    
        componentDidMount() {
            this.preloader();
        }

    render () {
        return(
            <div className="preloader">
                <div className="square" id="sq1"></div>
                <div className="square" id="sq2"></div>
                <div className="square" id="sq3"></div>
                <div className="square" id="sq4"></div>
                <div className="square" id="sq5"></div>
                <div className="square" id="sq6"></div>
                <div className="square" id="sq7"></div>
                <div className="square" id="sq8"></div>
                <div className="square" id="sq9"></div>
            </div>
        );
    }
}

export default Preloader;