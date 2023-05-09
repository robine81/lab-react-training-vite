import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    //const yearArr = expirationYear.split('')
    //console.log(yearArr)
    const hiddenNumber = number.slice(0, -4).replace(/./g, '•') + number.slice(-4);

    const expiry = "0"+expirationMonth.toString()+"/"
    return (
        <div class='oneCredit' style={{background: `${bgColor}`, color: `${color}`, justifyContent: `center`}}>
            <img src="../assets/images/visa.png" alt="visa"/>
            <h3>{hiddenNumber}</h3>
            <p>Expires: {expiry}{expirationYear}     {bank}</p>
            <p>{owner}</p>
        </div>
  )
}

export default CreditCard