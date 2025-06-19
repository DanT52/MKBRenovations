import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div>
      {/* 404 Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-primary text-white section-padding min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              {/* 404 Icon */}
              <div className="bg-white/10 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Page Not Found
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Oops! The page you're looking for seems to have been renovated out of existence. 
                Let's get you back to something beautiful.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Go Home
              </Link>
              <Link to="/about" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Learn About Us
              </Link>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Link to="/" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Home</h3>
                <p className="text-sm text-gray-300">Start your renovation journey</p>
              </Link>

              <Link to="/about" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <p className="text-sm text-gray-300">Meet our expert team</p>
              </Link>

              <Link to="/projects" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Projects</h3>
                <p className="text-sm text-gray-300">View our portfolio</p>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-300 mb-4">Need help? Contact us directly:</p>
              <a href="tel:+13609917646" className="text-primary hover:text-green-400 text-xl font-semibold transition-colors duration-200">
                (360) 991-7646
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
