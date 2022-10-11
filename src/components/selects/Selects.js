import React from 'react'
import './SelectsStyles.css'

import dvc from '../../assets/dvc.jpg'
import Model from '../../assets/model.jpg'
import IOT from '../../assets/iot.jpeg'
import ML from '../../assets/ml.jpg'
import SML from '../../assets/sml.jpg'
import KeyWest from '../../assets/keywest.jpg'


import SelectsImg from '../SelectsImg/SelectsImg'




function Selects() { 
    return (
        <div name='views' className='selects'>
            <h1 align="center"  >Our Key Domains</h1>
            <div className='container'>
                <SelectsImg bgImg={dvc} text='Data Visualization' />
                <SelectsImg bgImg={Model} text='3D Modelling' />
                <SelectsImg bgImg={IOT} text='Internet Of Things' />
                <SelectsImg bgImg={ML} text='Machine Learning' />
                <SelectsImg bgImg={SML} text='Simulation' />
                
            </div>

        </div>
    )
}

function onClick(){
    
}

export default Selects
