import { useState } from "react";

function PhoneCard({ brand, name, price, ram, storage, camera, battery }) {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className="card">
      <p className="brand">{brand}</p>
      <h3>{name}</h3>
      <p className="price">TSh {price.toLocaleString()}</p>

      <button className="btn-small" onClick={() => setShowSpecs(!showSpecs)}>
        {showSpecs ? "Hide specs" : "Show specs"}
      </button>

      {showSpecs && (
        <ul className="specs">
          <li>RAM: {ram}</li>
          <li>Storage: {storage}</li>
          <li>Camera: {camera}</li>
          <li>Battery: {battery}</li>
        </ul>
      )}
    </div>
  );
}

export default PhoneCard;