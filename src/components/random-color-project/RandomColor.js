import React, { useEffect } from 'react'

function randomNumberGenerator(num) {
    let res = Math.floor(Math.random()*num);
    return res;
}

const RandomColor = () => {
    const [colorType, setColorType] = React.useState('hex');
    const [color, setColor] = React.useState("#000000");

    function genHexColor() {
        const hexValues = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

        let res = '#';
        for (let i=0; i<6; i++) {
            let index = randomNumberGenerator(15);
            res += hexValues[index];
        }
        setColor(res);
    }

    function genRgbColor() {
        const r = randomNumberGenerator(255);
        const g = randomNumberGenerator(255);
        const b = randomNumberGenerator(255);
        const rgbVal = `rgb(${r},${g},${b})`;
        setColor(rgbVal);
    }

    useEffect(()=>{
        if (colorType === 'rgb') genRgbColor();
        else genHexColor();
    }, [colorType]);

    return (
        <div className='container'
        style={{
            width:'100vw',  /* sets to full screen width */
            height:'100vh', /* sets to full screen height */
            background: color
        }}>
            <button onClick={()=>setColorType('rgb')}>Create RGB Color</button>
            <button onClick={()=>setColorType('hex')}>Create HEX Color</button>
            <button onClick={()=>{
                if (colorType === 'hex') genHexColor();
                if (colorType === 'rgb') genRgbColor();
            }}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px'
            }}>
                <h3>{colorType} color</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor