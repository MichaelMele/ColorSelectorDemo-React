import { useState } from "react";




    


// changes color variables
const onChange = (e) => {

    const [colorChange, setColorChange] = useState({
        primary: '#130303',
        secondary: '#F5853F',
        tertiary:  '#2D080A',
        quaternary:  '#7C3626', 
        quinary: '#FFCDBC',
        background:  '#FFFFFf',
    });
    



        
        setColorChange({ ...colorChange, [e.target.name]: e.target.value })
        document.querySelector(":root").style.setProperty(
            `--${e.target.name}`,
            colorChange[e.target.name]
        )

    
}

export default onChange