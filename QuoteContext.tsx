import  { createContext, useContext, useState, ReactNode } from "react";

interface SelectedService {
  title: string;
  quantity: string;
}

interface QuoteContextType {
  selectedServices: SelectedService[];
  addService: (title: string) => void;
  removeService: (title: string) => void;
  updateQuantity: (title: string, quantity: string) => void;
  clearServices: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  const addService = (title: string) => {
    setSelectedServices((prev) => {
      if (prev.find((s) => s.title === title)) return prev; // no duplicates
      return [...prev, { title, quantity: "" }];
    });
  };

  const removeService = (title: string) => {
    setSelectedServices((prev) => prev.filter((s) => s.title !== title));
  };

  const updateQuantity = (title: string, quantity: string) => {
    setSelectedServices((prev) =>
      prev.map((s) => (s.title === title ? { ...s, quantity } : s))
    );
  };

  const clearServices = () => setSelectedServices([]);

  return (
    <QuoteContext.Provider
      value={{ selectedServices, addService, removeService, updateQuantity, clearServices }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useQuote must be used within a QuoteProvider");
  return context;
};
