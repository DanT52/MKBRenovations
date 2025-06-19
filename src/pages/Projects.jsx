import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const handleViewRecentWork = () => {
    navigate('/');
    // Small delay to ensure the page has loaded before scrolling
    setTimeout(() => {
      const recentWorkSection = document.querySelector('[data-section="recent-work"]');
      if (recentWorkSection) {
        recentWorkSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
  return (
    <div>      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Explore our portfolio of completed kitchen and bathroom renovations
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Project Gallery Coming Soon
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're currently building our project portfolio to showcase our best work. 
              In the meantime, you can see some of our recent projects in the gallery 
              on our home page, or contact us directly to discuss your renovation needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Renovations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom cabinet installations</li>
                  <li>• Countertop upgrades</li>
                  <li>• Modern appliance integration</li>
                  <li>• Lighting and electrical work</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom Remodels</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Shower and tub installations</li>
                  <li>• Custom tile work</li>
                  <li>• Vanity and fixture upgrades</li>
                  <li>• Plumbing and electrical updates</li>
                </ul>
              </div>
            </div>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleViewRecentWork} className="btn-primary">
                View Recent Work
              </button>
              <a href="tel:+13609917646" className="btn-secondary">
                Call (360) 991-7646
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
