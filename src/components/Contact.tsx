// Contact.jsx
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "@google/model-viewer"; // Import model-viewer

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your printing project? Contact us today for expert
            advice, quick quotes, and exceptional service. We're here to help
            bring your vision to life.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Call us for immediate assistance
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Send us your requirements
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  info@printverse.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Visit our printing facility
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  123 Printing Street
                  <br />
                  Business District, City 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Saturday: 9:00 AM - 4:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right: 3D Model */}
          <div className="flex justify-center">
            <model-viewer
              src="/models/envelope.glb"
              alt="Envelope 3D Model"
              
              camera-controls
              style={{ width: "100%", height: "400px" }}
            ></model-viewer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
