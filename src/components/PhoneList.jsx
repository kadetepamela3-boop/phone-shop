import { useState } from "react";
import PhoneCard from "./PhoneCard";
import { phones } from "../data/phones";

function PhoneList() {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const brands = ["All", ...new Set(phones.map((phone) => phone.brand))];

  const filteredPhones =
    selectedBrand === "All"
      ? phones
      : phones.filter((phone) => phone.brand === selectedBrand);

  return (
    <section id="phones" className="phone-section">
      <h2>Our Phones</h2>

      <div className="filters">
        {brands.map((brand) => (
          <button
            key={brand}
            className={selectedBrand === brand ? "filter active" : "filter"}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      {filteredPhones.length === 0 ? (
        <p>No phones found.</p>
      ) : (
        <div className="grid">
          {filteredPhones.map((phone) => (
            <PhoneCard
              key={phone.id}
              brand={phone.brand}
              name={phone.name}
              price={phone.price}
              ram={phone.ram}
              storage={phone.storage}
              camera={phone.camera}
              battery={phone.battery}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PhoneList;