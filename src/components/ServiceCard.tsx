// ServiceCard.tsx
import React, { useState } from "react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  service: Service;
  onAddToQuote: (service: Service) => void;
}

const ServiceCard: React.FC<Props> = ({ service, onAddToQuote }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToQuote(service);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
      <button
        onClick={handleAdd}
        disabled={added}
        className={`mt-6 w-full py-2 rounded-lg font-medium transition-colors ${
          added
            ? "bg-green-500 text-white cursor-default"
            : "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800"
        }`}
      >
        {added ? "Added to Quote" : "Get Quote for This Service"}
      </button>
    </div>
  );
};

export default ServiceCard;
