//import React from "react";
import { 
  BookOpen,  
  CreditCard, 
  Shirt, 
  Palette, 
  Layers, 
  Scissors,
  Users,
  ImageIcon,
  Flag,
  FileImage
} from "lucide-react";

import { useQuote } from "../QuoteContext"; // Adjust path if needed

const Services = () => {
  const { addService, selectedServices } = useQuote();

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Single Color Printing",
      description: "Cost-effective printing for books, letterheads, calendars, and magazines",
      items: ["Books & Manuals", "Letterheads", "Calendars", "Magazines", "Forms & Documents"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Multi-Color Printing",
      description: "Vibrant multi-color printing for enhanced visual appeal",
      items: ["Brochures", "Catalogs", "Marketing Materials", "Educational Books", "Corporate Reports"],
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "4-Color Process Printing",
      description: "Full-color CMYK printing for stunning visual results",
      items: ["Photo Books", "Art Prints", "Premium Brochures", "Annual Reports", "Marketing Collateral"],
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Binding Services",
      description: "Professional binding solutions for all document types",
      items: ["Perfect Binding", "Saddle Stitching", "Spiral Binding", "Hardcover Binding", "Wire-O Binding"],
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "ID Cards",
      description: "High-quality identification cards with various finishes",
      items: ["Matt Finish", "Gloss Finish", "RFID Cards", "Employee IDs", "Access Cards"],
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Lanyards",
      description: "Custom lanyards for events and corporate use",
      items: ["Normal Lanyards", "Digital Print Lanyards", "Custom Colors", "Logo Printing", "Bulk Orders"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Designing",
      description: "Creative design services for all your printing needs",
      items: ["Logo Design", "Brochure Design", "Layout Design", "Brand Identity", "Print Ready Files"],
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Lamination",
      description: "Protective lamination for durability and enhanced appearance",
      items: ["Matt Lamination", "Gloss Lamination", "Spot UV", "Embossing", "Foiling"],
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Die Cutting & Punching",
      description: "Precision cutting and punching in any shape you need",
      items: ["Custom Shapes", "Corner Rounding", "Hole Punching", "Window Cutting", "Special Effects"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Visiting Cards",
      description: "Professional business cards that make lasting impressions",
      items: ["Standard Cards", "Premium Finish", "Embossed Cards", "Foil Stamping", "Unique Shapes"],
    },
    {
      icon: <Flag className="h-8 w-8" />,
      title: "Banners & Posters",
      description: "Large format printing for maximum impact",
      items: ["Vinyl Banners", "Poster Printing", "Trade Show Displays", "Indoor/Outdoor", "Weather Resistant"],
    },
    {
      icon: <FileImage className="h-8 w-8" />,
      title: "Leaflets & Flyers",
      description: "Eye-catching promotional materials for marketing campaigns",
      items: ["Single Fold", "Tri-fold", "Z-fold", "Gate Fold", "Custom Sizes"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive printing solutions to meet all your business and personal needs. 
            From simple single-color prints to complex multi-color projects, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isAdded = selectedServices.some((s) => s.title === service.title);

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-gray-500 dark:text-gray-400 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addService(service.title)}
                  disabled={isAdded}
                  className={`mt-6 w-full py-2 rounded-lg font-medium transition-colors ${
                    isAdded
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800"
                  }`}
                >
                  {isAdded ? "Added to Quote" : "Get Quote"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
