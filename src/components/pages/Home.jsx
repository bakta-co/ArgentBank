import React from "react";
import Card from "../card";
import data from '../../datas/card-datas';

const Home = () => {

  return (
    <div className="home">
    <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <div className="features">
        {data.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
   

export default Home;