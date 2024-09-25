import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const purifier = [
  {
    id: 1,
    name: "Bamboo Palm",
    price: "15",
    description: "This tropical plant not only adds beauty but improves air quality by filtering toxins.",
    imageSrc: "/images/air-purifier-plants/bamboo-palm.jpeg",
  },
  {
    id: 2,
    name: "Chinese Evergreen",
    price: "12",
    description: "Known for thriving in low light, it effectively removes harmful pollutants from the air.",
    imageSrc: "/images/air-purifier-plants/chinese-evergreen.jpeg",
  },
  {
    id: 3,
    name: "English Ivy",
    price: "18",
    description: "Perfect for removing mold and allergens from the air, great for indoor spaces.",
    imageSrc: "/images/air-purifier-plants/english-ivy.jpeg",
  },
  {
    id: 4,
    name: "Gerbera Daisy",
    price: "16",
    description: "This colorful flower not only brightens rooms but also enhances air quality.",
    imageSrc: "/images/air-purifier-plants/gerbera-daisy.jpeg",
  },
  {
    id: 5,
    name: "Dragon Tree",
    price: "22",
    description: "Resilient and easy to maintain, helps clear formaldehyde and benzene from the air.",
    imageSrc: "/images/air-purifier-plants/dragon-tree.jpeg",
  },
  {
    id: 6,
    name: "Money Plant",
    price: "10",
    description: "A popular choice for homes, known for bringing good luck and purifying the air.",
    imageSrc: "/images/air-purifier-plants/money-plant.jpeg",
  },
];

const aromatic = [
  {
    id: 7,
    name: "Damascus Rose",
    price: "15",
    description: "A beautifully fragrant plant, ideal for adding a sweet aroma to any space.",
    imageSrc: "/images/aromatic-plants/damascus-rose.jpg",
  },
  {
    id: 8,
    name: "Lemon Basil",
    price: "12",
    description: "This herb offers a zesty citrus scent and can be used to add freshness to your kitchen.",
    imageSrc: "/images/aromatic-plants/lemon-basil.jpg",
  },
  {
    id: 9,
    name: "Mogra",
    price: "18",
    description: "A delicate, white flower known for its sweet, refreshing fragrance.",
    imageSrc: "/images/aromatic-plants/mogra.jpg",
  },
  {
    id: 10,
    name: "Oregano",
    price: "16",
    description: "Famous for its culinary uses, this herb also adds a spicy, aromatic scent to your garden.",
    imageSrc: "/images/aromatic-plants/oregano.jpg",
  },
  {
    id: 11,
    name: "Raat Ki Raani",
    price: "22",
    description: "Blooms at night, filling the air with its intense, sweet aroma.",
    imageSrc: "/images/aromatic-plants/raat-ki-raani.jpg",
  },
  {
    id: 12,
    name: "Rajnigandha",
    price: "10",
    description: "Known for its beautiful white flowers and rich, pleasant scent.",
    imageSrc: "/images/aromatic-plants/rajnigandha.jpg",
  },
];
const succulents = [
  {
    id: 13,
    name: "Aloe Vera Pepe",
    price: "15",
    description: "A low-maintenance succulent that purifies the air and offers medicinal benefits.",
    imageSrc: "/images/succulents/aloe-vera-pepe.jpg",
  },
  {
    id: 14,
    name: "Black Prince",
    price: "12",
    description: "A dark-hued succulent, ideal for low light environments and air purification.",
    imageSrc: "/images/succulents/black-prince.jpg",
  },
  {
    id: 15,
    name: "Haworthia Coarctata",
    price: "18",
    description: "Compact and hardy, great for small spaces, improves air quality.",
    imageSrc: "/images/succulents/haworthia-coarctata.jpg",
  },
  {
    id: 16,
    name: "Haworthia Truncata",
    price: "16",
    description: "Unique in appearance, this succulent thrives in sunlight and cleanses the air.",
    imageSrc: "/images/succulents/haworthia-truncata.jpg",
  },
  {
    id: 17,
    name: "Hoya Heart",
    price: "22",
    description: "A heart-shaped succulent, symbolizing love, easy to care for and air-purifying.",
    imageSrc: "/images/succulents/hoya-heart.jpg",
  },
  {
    id: 18,
    name: "Succulent",
    price: "10",
    description: "A versatile and resilient plant that brightens spaces and requires minimal care.",
    imageSrc: "/images/succulents/succulent.jpg",
  },
];


const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto pb-4">
      <Navbar />
      <main className="mt-6">
        <div className="flex justify-center">
          <h2 className="text-2xl text-center mb-6 font-bold inline-block relative">
            <span className="absolute left-0 right-0 top-0 border-t border-black"></span>
            <span className="absolute left-0 right-0 bottom-0 border-b border-black"></span>
            Air Purifying Plants
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {purifier.map((product, index) => (
            <ProductCard
            id={product.id}
              key={index}
              name={product.name}
              price={product.price}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <h2 className="text-2xl text-center mb-6 font-bold inline-block relative">
            <span className="absolute left-0 right-0 top-0 border-t border-black"></span>
            <span className="absolute left-0 right-0 bottom-0 border-b border-black"></span>
            Aromatic Plants
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {aromatic.map((product, index) => (
            <ProductCard
            id={product.id}
              key={index}
              name={product.name}
              price={product.price}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <h2 className="text-2xl text-center mb-6 font-bold inline-block relative">
            <span className="absolute left-0 right-0 top-0 border-t border-black"></span>
            <span className="absolute left-0 right-0 bottom-0 border-b border-black"></span>
            Succulents
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {succulents.map((product, index) => (
            <ProductCard
            id={product.id}
              key={index}
              name={product.name}
              price={product.price}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;