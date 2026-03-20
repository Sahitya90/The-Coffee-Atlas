import React from 'react'
import './Home.css'
import Image from '../assets/flowers.jpg'
import Coffeeselection from '../Components/Coffee-selection/Coffeeselection'
import BrewingGuides from '../Components/BrewingGuides/BrewingGuides'


const Home = ({sidebar}) => {
  return (<>
    <div className="home">
        
        <div className="background">
            <img src={Image} alt="" className='background-img'/>
        </div>
        

        <div className="hero-content">
          <h1>Explore the World in Every Cup</h1>
          <p>Discover origins, brewing methods, and your next favorite coffee.</p>

          
        </div>

        <div className="info">
          <div className="history">
            <h2>Brief History</h2>
            <p>The story of coffee is brewed in the mists of time. It begins in the ancient Ethiopian highlands, where the herder Kaldi first witnessed the spirited dance of his goats after grazing on crimson cherries. This wild discovery was meticulously refined by Sufi monks in Yemen, who roasted the beans to aid their midnight prayers. By the 16th century, this dark, aromatic craft had traversed the deserts to Persia and Turkey, evolving from a simple berry into the complex, social ritual we cherish today</p>
          </div>
          <div className="bean-variety">
            <h2>Arabica v/s Robusta</h2>
            <p>
              Coffee is not merely a drink; it is a tale of two distinct characters. <strong>Arabica</strong> is the poet of the cup—cultivated at high altitudes to develop a sophisticated, nuanced profile singing with soft sweetness and vibrant berry notes. <strong>Robusta</strong> however, is the warrior. Resilient and bold, it delivers an uncompromising strength with deep, earthy nuttiness and a caffeine punch twice as potent as its delicate counterpart.
            </p>
          </div>

        </div>
        
        
      
    </div>
    <Coffeeselection/>
    <BrewingGuides/>
    </>
  )
}

export default Home
