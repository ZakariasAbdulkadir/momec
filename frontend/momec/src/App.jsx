import React, { useState } from 'react';

const App = () => {
  const [step, setStep] = useState(1);

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

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Navbar */}
      <div className="flex mb-8">
        <button
          onClick={() => setStep(1)}
          className={`flex-1 py-2 px-4 focus:outline-none ${step === 1 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          Location
        </button>
        <button
          onClick={() => setStep(2)}
          className={`flex-1 py-2 px-4 focus:outline-none ${step === 2 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          Truck
        </button>
        <button
          onClick={() => setStep(3)}
          className={`flex-1 py-2 px-4 focus:outline-none ${step === 3 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          Service
        </button>
        <button
          onClick={() => setStep(4)}
          className={`flex-1 py-2 px-4 focus:outline-none ${step === 4 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          Time
        </button>
      </div>

      {/* Step Progress Bar */}
      <div className="flex mb-8">
        <div className={`w-1/4 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-200'} h-2 rounded-full`}></div>
        <div className={`w-1/4 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-200'} h-2 rounded-full mx-1`}></div>
        <div className={`w-1/4 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-200'} h-2 rounded-full mx-1`}></div>
        <div className={`w-1/4 ${step >= 4 ? 'bg-blue-500' : 'bg-gray-200'} h-2 rounded-full`}></div>
      </div>

      {/* Content based on step */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Enter your location</h2>
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Select your Truck</h2>
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
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Select your service</h2>
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
      )}

      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Select your service time</h2>
          <input
            type="datetime-local"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevStep}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${step === 1 && 'opacity-50 cursor-not-allowed'}`}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${step === 4 && 'opacity-50 cursor-not-allowed'}`}
          disabled={step === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
