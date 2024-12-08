import React from 'react';

const Home = () => {
  const products = [
    { id: 1, name: 'Controller', image: '/images/product1.jpg' },
    { id: 2, name: 'Headphones', image: '/images/product2.jpg' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Amna Store</h1>
      <p className="text-center mb-8">Discover our amazing products!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
