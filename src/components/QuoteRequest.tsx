import React, { useState } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useQuote } from "../QuoteContext"; // Adjust path accordingly

const QuoteRequest = () => {
  const { selectedServices, updateQuantity, removeService, clearServices } = useQuote();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
    urgency: "standard",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // On submit, prepare a combined data structure that includes selectedServices + formData
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please add at least one service to quote.");
      return;
    }

    // Prepare data to send - flatten services into a string or array as needed
    const servicesData = selectedServices
      .map((s) => `${s.title} - Quantity: ${s.quantity || "N/A"}`)
      .join("\n");

    const dataToSend = {
      ...formData,
      services: servicesData,
    };

    const serviceID = "service_ariqn1e";
    const templateCustomerID = "template_6r0b84m";
    const templateOwnerID = "template_inn4p07";
    const publicKey = "7hDyZCzdQLuvxwAZw";

    try {
      await emailjs.send(serviceID, templateCustomerID, dataToSend, publicKey);
      await emailjs.send(serviceID, templateOwnerID, { ...dataToSend, to_email: "" }, publicKey);

      setSubmitted(true);
      clearServices();
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        description: "",
        urgency: "standard",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send quote request. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 max-w-lg mx-auto">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quote Submitted Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for your interest in our services. We'll review your requirements and get
              back to you within 24 hours with a detailed quote.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Quote</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tell us about your project and we'll provide you with a detailed quote within 24 hours.
            No obligation, just honest pricing.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Info Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter company name (optional)"
                />
              </div>
            </div>

            {/* Selected Services with Quantity */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Selected Services *
              </label>
              {selectedServices.length === 0 && (
                <p className="text-red-500 mb-4">No services selected yet. Please add services above.</p>
              )}
              <ul className="space-y-4 mb-6 max-h-60 overflow-auto border border-gray-300 dark:border-gray-700 rounded p-4 bg-gray-50 dark:bg-gray-800">
                {selectedServices.map(({ title, quantity }) => (
                  <li key={title} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white font-medium">{title}</p>
                      <input
                        type="text"
                        placeholder="Quantity (e.g., 1000 pcs)"
                        value={quantity}
                        onChange={(e) => updateQuantity(title, e.target.value)}
                        className="mt-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeService(title)}
                      className="ml-4 text-red-600 hover:text-red-800"
                      aria-label={`Remove ${title}`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Please describe your project requirements..."
              />
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timeline *
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="standard">Standard (3-5 business days)</option>
                <option value="rush">Rush (24-48 hours)</option>
                <option value="urgent">Urgent (Same day)</option>
                <option value="flexible">Flexible timeline</option>
              </select>
            </div>

            {/* Upload Files (optional) */}
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-2">Upload your files (optional)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Supported formats: PDF, JPG, PNG, AI, PSD (Max 10MB)
              </p>
              <input type="file" multiple className="hidden" accept=".pdf,.jpg,.jpeg,.png,.ai,.psd" />
              <button
                type="button"
                className="mt-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Choose Files
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Quote Request</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequest;
