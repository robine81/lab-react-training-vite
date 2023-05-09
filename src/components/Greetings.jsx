import React from 'react'

function Greetings({lang, child}) {
    if (lang === 'en') {
    return (
        <div class='card'>
        Hello {child}
        </div>
        )
  } else if(lang === 'fr') {
      return (
      <div class='card'>
          Bonjour {child}
      </div>
      )
    } else if(lang === 'es')
    return (
        <div class='card'>
          Hola {child}
      </div>
    )
    else if(lang === 'de')
    return (
        <div class='card'>
          Hallo {child}
      </div>
    )
}

export default Greetings