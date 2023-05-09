import React from 'react'

function Random({min, max}) {
const randomValue = Math.floor(Math.random() * (max - min) + min)
  return (
    <div class="card">Random value between {min} and {max} => {randomValue} </div>
  )
}

export default Random