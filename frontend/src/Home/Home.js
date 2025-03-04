import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Home() {
  const cardData = [
    { 
      imgSrc: "/biryani.gif", 
      title: "Biryani", 
      desc: "Aromatic and flavorful rice dish.",
      priceHalf: 99,
      priceFull: 199
    },
    { 
      imgSrc: "/pizza.jpg", 
      title: "Pizza", 
      desc: "Cheesy and delicious Italian delight.",
      priceHalf: 79,
      priceFull: 149
    },
    { 
      imgSrc: "/andhraMeals.jpg", 
      title: "Andhra Meals", 
      desc: "Spicy and traditional Andhra cuisine.",
      priceHalf: 79,
      priceFull: 149
    },
    { 
      imgSrc: "/Onion-Dosa.jpg", 
      title: "Onion Dosa", 
      desc: "Crispy South Indian dosa with onions.",
      
      priceFull: 80
    },
    { 
      imgSrc: "/Firedrice.jpg", 
      title: "Fried Rice", 
      desc: "Stir-fried rice with vegetables and spices.",
      priceHalf: 80,
      priceFull: 149
    },
    { 
      imgSrc: "/vodapav.jpg", 
      title: "Vada Pav", 
      desc: "Mumbai's famous spicy potato burger.",
      priceHalf: 50,
      priceFull: 70
    }
  ];

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="m-3 d-flex flex-wrap gap-3 justify-content-center">
        {cardData.map((item, index) => (
          <Card 
            key={index} 
            imgSrc={item.imgSrc} 
            title={item.title} 
            desc={item.desc}
            priceHalf={item.priceHalf}
            priceFull={item.priceFull}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

