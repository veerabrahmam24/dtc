import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Video from '../../assets/DigitaltwinVideo.mp4'
function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
            <h1>DIGITAL TWIN CLUB</h1>
                <h2>Tag line</h2>
                <form className="form">
                </form>
            </div>
        </div>
    )
}
export default Hero