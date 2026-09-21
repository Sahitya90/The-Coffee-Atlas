import React, {useState} from 'react'
import './BrewingGuides.css'
import FrenchPress from '../../assets/french-press.jpg'
import AeroPress from '../../assets/aero-press.jpg'
import PourOver from '../../assets/pour-over.jpg'
import MokaPot from '../../assets/moka-pot.jpg'
import Turkish from '../../assets/turkish.jpg'
import Siphon from '../../assets/Siphon.jpg'
import Chemex from '../../assets/Chemex.webp'
import ColdBrew from '../../assets/cold brew.jpg'



const BrewingGuides = () => {

  const [activeIndex, setActiveIndex]=  useState(null);  //here we wrote null because no card is open right now
  
  const brewingData = [
    {
      img: FrenchPress,
      title: "French Press",
      description: "The French Press immerses coffee grounds in hot water, resulting in a robust, earthy flavor. Use coarse grounds and steep for 4 minutes before plunging. Perfect for lazy Sunday mornings."

    },
    {
      img: PourOver,
      title: "Pour Over",
      description: "Pour Over involves pouring hot water through coffee grounds in a filter. It brings out delicate floral and fruity notes. Requires a slow, steady pour and medium-fine grounds"

    },
     {
      img: MokaPot,
      title: "Moka Pot",
      description: "The Moka Pot uses steam pressure to push water through coffee grounds. It produces a rich, intense brew similar to espresso. Keep the lid open while brewing to watch the magic!"

    },
    {
      img: AeroPress,
      title: "Aero Press",
      description: "The AeroPress uses air pressure to push water through the coffee. It allows for endless experimentation with grind size and steep time. It's virtually indestructible and self-cleaning."

    },
    {
      img: Turkish,
      title: "Turkish",
      description: "A traditional method using an 'Ibrik' pot. Coffee is ground as fine as flour and boiled with water and sugar. It is served unfiltered, leaving a thick, muddy layer at the bottom."
    },
    {
      img: Siphon,
      title: "Siphon",
      description: "A theatrical method using vacuum physics. Water rises to the top chamber to brew, then is sucked back down through a filter. It produces a hot, crisp, and vibrant cup."
    },
    {
      img: ColdBrew,
      title: "Cold Brew",
      description: "Steeped in cold water for 12-24 hours, this method replaces heat with time. The result is an incredibly smooth, low-acidity coffee that highlights chocolate and caramel notes."

    },
    {
      img: Chemex,
      title: "Chemex",
      description: "An elegant glass vessel that uses extra-thick paper filters. It removes nearly all coffee oils, producing an incredibly clean, bright, and tea-like cup. a favorite among designers."
    }
  ];

  // to handle the click

  const handleToggle =(index)=>{

    if(activeIndex === index){
      setActiveIndex(null);
    }
    else{
      setActiveIndex(index);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header">
            <h1>Master Your Brew</h1>
            <p>The secret to a perfect cup lies in the method. Choose your style.</p>
        </div>
        <div className="images">
          {brewingData.map((item, index)=> (
            <div key={index} 
            className={`image-container ${activeIndex === index ? 'active' : ''}`}
            onClick={()=> handleToggle(index)}>


                <img src={item.img} alt={item.title} />
                <p className='title'>{item.title}</p>

                <div className="description">
                  <p>{item.description}</p>
                </div>
            </div>
            ))}
            
            </div>
        </div>
      </div>
    
  )
}

export default BrewingGuides
