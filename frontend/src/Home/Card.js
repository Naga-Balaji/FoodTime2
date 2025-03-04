import React, { useState } from "react";

export default function Card({ imgSrc, title, desc, priceHalf, priceFull }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("full");
  const price = size === "half" ? priceHalf : priceFull;
  const totalPrice = quantity * price;

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "30rem" }}>
      <img 
        src={imgSrc} 
        className="card-img-top" 
        alt={title} 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{desc}</p>
        <div className="container w-100">
          <select 
            className="form-select m-2"
            onChange={(e) => setQuantity(Number(e.target.value))}
            value={quantity}
          >
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select 
            className="form-select m-2"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          >
            <option value="half">Half (Rs.{priceHalf})</option>
            <option value="full">Full (Rs.{priceFull})</option>
          </select>
          <div className="fs-5 fw-bold mt-2">
            Total Price: Rs.{totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
}
