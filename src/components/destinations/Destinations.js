import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'
import IDM from '../../assets/idmposter.jpg'
import mf4 from '../../assets/m4fposter.jpg'


function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>UpComing-Events</h1>
                <p></p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={IDM} alt="/"/>
                    <img className='span-4 image-grid-row-3' src={mf4} alt="/"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Destinations
