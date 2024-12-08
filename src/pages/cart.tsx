import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Controller', price: 29.99, quantity: 1, image: '/images/product1.jpg' },
    { id: 2, name: 'Headphones', price: 39.99, quantity: 2, image: '/images/product2.jpg' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full md:w-auto">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
