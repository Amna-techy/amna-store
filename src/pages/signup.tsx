import React from 'react';

const Signup = () => {
  return (
    <div className="container mx-auto py-8 max-w-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Signup</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" type="email" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input id="password" type="password" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
