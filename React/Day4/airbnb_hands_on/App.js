import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


function App() {
            // <Hero />
    const cards =data.map(card =>{
        return(
            <Card 
                img={`images/${card.coverImg}`}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                country={card.location}
                title={card.title}
                price={card.price}
                openspots={card.openSpots}
                location={card.location}

                
            />
        )

    })
    return (
        <div>
            <Navbar />
        <section className="cards-list">
            {cards}
        </section>
          
        </div>
    )
}

export default App