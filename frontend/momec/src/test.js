import React from 'react';

const App = () => {

  const trucks = [
    { id: 1, brand: 'Volvo', year: 2022 },
    { id: 2, brand: 'Freightliner', year: 2021 },
    { id: 3, brand: 'Peterbilt', year: 2020 },
  ];

  const services = [
    'Engine diagnostics',
    'Oil change',
    'Brake repair',
    'Transmission service',
    'Electrical system repair',
  ];
  
  return (
    <div className="max-w-lg mx-auto mt-10">
      {/* Cars & Location */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Enter your location</h2>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Select your Truck</h2>
        {/* Generate list of 25 diesel semi truck brands and years */}
        {/* For simplicity, let's assume an array of truck objects */}
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          {trucks.map((truck, index) => (
            <option key={index} value={truck.id}>
              {truck.brand} - {truck.year}
            </option>
          ))}
        </select>
      </div>

      {/* Services */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Select your service</h2>
        {/* Generate 25 diesel mechanic service options */}
        <input
          type="text"
          placeholder="Search services..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
        />
        <div className="grid grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={`service-${index}`} className="mr-2" />
              <label htmlFor={`service-${index}`}>{service}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Select your service time</h2>
        {/* Tailwind CSS calendar */}
        {/* You may use a third-party library for the calendar */}
        {/* For simplicity, let's assume an input field for date and time */}
        <input
          type="datetime-local"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      
      {/* Review and Book */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Review and Book</h2>
        {/* Inputs for contact info */}
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
        />
        {/* Inputs for payment card info */}
        <input
          type="text"
          placeholder="Cardholder's name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Card number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
        />
        {/* Additional payment inputs (expiration date, CVV, etc.) */}
      </div>
      
      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Book Appointment
      </button>
    </div>
  );
};
// User page, post funcitoning,  Comment, replies
export default App;
