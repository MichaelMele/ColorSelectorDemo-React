
import  onChange  from "./Functions.js"
import { useState } from 'react'





const Controls = (props) => {
    
    // changes color variables
    const onChange = (e) => {
            
            props.setState({ ...props.state, [e.target.name]: e.target.value })
            document.querySelector(":root").style.setProperty(
                `--${e.target.name}`,
                props.state[e.target.name]
            )
    }
    

    
    
    return (
        <div className="controls-wrapper">
            <div className="color-selector">
                <label>Primary</label>
                <input onChange={onChange} name="primary" type="color" value={props.state['primary']}></input>
                
            </div>
            <div className="color-selector">
                <label>Secondary</label>
                <input onChange={onChange} name="secondary" type="color" value={props.state['secondary']}></input>
            </div>
            <div className="color-selector">
                <label>Tertiary</label>
                <input onChange={onChange} name="tertiary" type="color" value={props.state['tertiary']}></input>
            </div>
            <div className="color-selector">
                <label>Quaternary</label>
                <input onChange={onChange} name="quaternary" type="color" value={props.state['quaternary']}></input>
            </div>
            <div className="color-selector">
                <label>Quinary</label>
                <input onChange={onChange} name="quinary" type="color" value={props.state['quinary']}></input>
            </div>
            <div className="color-selector">
                <label>Background</label>
                <input onChange={onChange} name="background" type="color" value={props.state['background']}></input>
            </div>
        </div>
    )
}

export default Controls