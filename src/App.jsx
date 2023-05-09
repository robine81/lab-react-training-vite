import { useState } from 'react'
import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import DriverCard from './components/DriverCard'
import Rating from './components/Rating'

// const idCard = [
//   { lastName: 'Doe', 
//   firstName: 'John', 
//   gender: 'male', 
//   height: 178, 
//   birth: new Date("1992-07-14"),  
//   picture: "https://randomuser.me/api/portraits/men/44.jpg" },
//   { lastName: 'Obrien', 
//   firstName: 'Delores', 
//   gender: 'female', 
//   height: 172, 
//   birth: new Date("1988-05-11"),  
//   picture: "https://randomuser.me/api/portraits/men/44.jpg",}
// ]

function App() {

  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang='fr' child='Ludwig'/>
      <Random min={0} max={100}/>
      <BoxColor r={255} g={255} b={0}/>
      <div class='creditCards'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      {/* <Rating>1.49</Rating> */}
    </div>
  )
}

export default App
