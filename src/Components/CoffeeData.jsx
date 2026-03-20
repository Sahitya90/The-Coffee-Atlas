import React, { useState, useEffect } from 'react'
import { useParams,  useNavigate, Link } from 'react-router-dom'
import './CoffeeData.css'


const coffeeData = {
  espresso: {
    title: "Espresso",
    origin: "Italy",
    year: "1901",
    history: "The modern espresso machine was patented by Luigi Bezzera in Milan. He wanted to shorten his employees' coffee breaks, so he invented a machine that used steam pressure to brew coffee rapidly.",
    consumers: "Italy, Portugal, France",
    description: "The pure essence of coffee. A concentrated shot brewed by forcing very hot water under high pressure through finely ground coffee beans.",
    ingredients: ["7-9g Finely ground coffee", "Hot water (9 bar pressure)"],
    steps: ["Grind beans to fine powder", "Tamp the grounds evenly", "Pull the shot (25-30 seconds)", "Serve immediately with crema"]
  },
  affogato: {
    title: "Affogato",
    origin: "Italy",
    year: "1900s",
    history: "While vanilla gelato and espresso have distinct histories, the marriage of the two (affogato al caffe) became a staple of Italian dessert culture in the mid-20th century.",
    consumers: "Italy, Global Restaurants",
    description: "A delicious dessert-beverage hybrid. Hot espresso is poured over a scoop of cold vanilla gelato.",
    ingredients: ["1 scoop Vanilla Gelato", "1 shot hot Espresso"],
    steps: ["Scoop cold gelato into a glass", "Brew a fresh shot of espresso", "Pour hot espresso directly over the gelato", "Eat with a spoon before it melts"]
},
  cappuccino: {
    title: "Cappuccino",
    origin: "Italy",
    year: "Early 1900s",
    history: "Named after the Capuchin friars because the color of the espresso mixed with milk resembled their robes. It became popular globally after WWII.",
    consumers: "Europe, Australia, South America",
    description: "The perfect balance. An espresso-based drink composed of distinct layers: espresso, hot milk, and steamed milk foam.",
    ingredients: ["1/3 Espresso", "1/3 Steamed Milk", "1/3 Milk Foam"],
    steps: ["Brew espresso", "Froth milk to create thick foam", "Pour milk, then spoon foam on top", "Dust with chocolate powder"]
  },
  americano: {
    title: "Caffè Americano",
    origin: "Italy (WWII)",
    year: "1940s",
    history: "American soldiers in Italy during WWII found espresso too strong. To mimic the drip coffee from back home, they diluted it with hot water.",
    consumers: "USA, South Korea, Canada",
    description: "A smooth, diluted espresso that retains complex flavors without the intensity.",
    ingredients: ["1 shot Espresso", "150ml Hot water"],
    steps: ["Brew espresso", "Pour hot water into mug", "Pour espresso over water"]
  }
};

/* --- 2. COMPONENT CODE --- */
const CoffeeData = ({user}) => {
  const { coffeeType } = useParams();
  const navigate = useNavigate();
  const storageKey = user ? 'favs_${user.uid}' : null;

  
  const {isFav, setIsFav}= useState(false);
  
  const coffee = coffeeData[coffeeType]; // Looks up the data above


  // Safety check if someone types a wrong URL
  if (!coffee) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Coffee not found!</h2>
        <Link to="/">Return Home</Link>
      </div>
    );
  }
  useEffect(() => {
        if (storageKey && coffeeType) {
            const savedFavs = JSON.parse(localStorage.getItem(storageKey)) || [];
            if (savedFavs.some(fav => fav.toLowerCase() === coffeeType.toLowerCase())) {
                setIsFav(true);
            }
        }
    }, [storageKey, coffeeType]);

    const toggleFav = () => {
        if (!user) {
            alert("Please login first!");
            return;
        }
        
        const savedFavs = JSON.parse(localStorage.getItem(storageKey)) || [];
        let updatedFavs;

        if (isFav) {
            updatedFavs = savedFavs.filter(fav => fav.toLowerCase() !== coffeeType.toLowerCase());
            setIsFav(false);
        } else {
            updatedFavs = [...savedFavs, coffeeType];
            setIsFav(true);
        }

        localStorage.setItem(storageKey, JSON.stringify(updatedFavs));

        setIsFav(!isFav);
    }

  return (
    <div className="coffee-detail-container">
      
      {/* Header */}
      <div className="coffee-header">
        <h1>{coffee.title}</h1>
        <p className="tagline">{coffee.description}</p>
        <div className="quick-facts">
            <span className="badge">🌍 Origin: {coffee.origin}</span>
            <span className="badge">📅 Year: {coffee.year}</span>
            <span className="badge">☕ Popular in: {coffee.consumers}</span>
        </div>
      </div>

      <hr className="divider"/>

      {/* History */}
      <div className="section history-section">
        <h2>📜 The History</h2>
        <p>{coffee.history}</p>
      </div>

      {/* Instructions Grid */}
      <div className="details-grid">
        <div className="box ingredients-box">
          <h3>🛒 Ingredients</h3>
          <ul>
            {coffee.ingredients.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="box steps-box">
          <h3>⚙️ How to Make</h3>
          <ol>
            {coffee.steps.map((step, index) => <li key={index}>{step}</li>)}
          </ol>
        </div>
      </div>
      
      <div className="back-btn-container">
        <button onClick={() => navigate(-1)} className="back-btn" style={{border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1.1rem'}}>
           ← Back to Menu
        </button>
        </div>
    </div>
  )
}

export default CoffeeData