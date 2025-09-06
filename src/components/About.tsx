
import { Award, Clock, Users, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Happy Customers" },
    { icon: <Clock className="h-8 w-8" />, number: "24-48h", label: "Turnaround Time" },
    { icon: <Star className="h-8 w-8" />, number: "99.9%", label: "Quality Rate" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Printverse?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At Printverse, we're more than just a printing company – we're your trusted partner 
                in bringing your ideas to life. With years of experience and state-of-the-art equipment, 
                we deliver exceptional quality printing services that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our commitment to quality, competitive pricing, and customer satisfaction has made us 
                the preferred choice for businesses, organizations, and individuals across the region.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">State-of-the-Art Equipment</h4>
                  <p className="text-gray-600 dark:text-gray-300">Latest printing technology for superior quality results</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Expert Team</h4>
                  <p className="text-gray-600 dark:text-gray-300">Skilled professionals dedicated to your project's success</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Quality Guarantee</h4>
                  <p className="text-gray-600 dark:text-gray-300">100% satisfaction guarantee on all our services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Modern printing facility"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg">15+ Years</h4>
              <p className="text-blue-100">of Excellence</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
