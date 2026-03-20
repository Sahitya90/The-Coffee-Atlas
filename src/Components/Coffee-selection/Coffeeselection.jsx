import React from 'react'
import './Coffeeselection.css'
import {Link} from 'react-router-dom'
import Affogato from '../../assets/affogato.jpg'
import Americano from '../../assets/americano.jpg'
import Cappuccino from '../../assets/cappuccino.jpg'
import Espresso from '../../assets/espresso.jpg'


const Coffeeselection = () => {
  return (
    <div>
      <div className="suggestions">
        <h1>The Coffees that Wake Up the World !</h1>
        <div className="coffee-images">
          <Link to ='/coffee/affogato' className='card-link'>
          <div className="image">
            <img src={Affogato} alt="" />
            <p>Affogato</p>
          </div>
          </Link>
          <Link to ='/coffee/americano' className='card-link'>
          <div className="image">
            <img src={Americano} alt="" />
            <p>Americano</p>
          </div>
          </Link>
          <Link to ='/coffee/cappuccino' className='card-link'>
          <div className="image">
            <img src={Cappuccino} alt="" />
            <p>Cappucino</p>
          </div>
          </Link>
          <Link to ='/coffee/espresso' className='card-link'>
          <div className="image">
            <img src={Espresso} alt="" />
            <p>Espresso</p>
          </div>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Coffeeselection
