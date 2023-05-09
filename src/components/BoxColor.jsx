import React from 'react'

function BoxColor({r, g, b}) {
    let rgbProp = [r,g,b].join(',')
    const hexR = r.toString(16);
    const hexG = g.toString(16);
    const hexB = b.toString(16);

    let hexValue = '#'+hexR+hexG+hexB

    console.log('This is the rgbProp: ', rgbProp)
    console.log('This is the hexR: ', hexR)
    console.log('This is the hexG: ', hexG)
    console.log('This is the hexB: ', hexB)
    console.log('This is the hexValue: ', hexValue)
  return (
    <div class='card' style={{background: `rgb(${rgbProp})`, justifyContent: `center`}}>
        <p>rgb({rgbProp}) <br />
        {hexValue}</p>
    </div>
  )
}

export default BoxColor