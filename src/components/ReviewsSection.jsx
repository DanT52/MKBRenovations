import { reviews } from '../data/reviews';
import { useState } from 'react';

const Reviews = () => {
  // Start at a random review instead of always starting at 0
  const [currentReview, setCurrentReview] = useState(() => 
    Math.floor(Math.random() * reviews.length)
  );

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their renovation experience with MKB Renovations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Review Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {renderStars(reviews[currentReview].rating)}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "{reviews[currentReview].text}"
            </blockquote>
              <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">
                  {reviews[currentReview].name.charAt(0)}
                </span>
              </div>              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">
                  {reviews[currentReview].name}
                </div>
                <div className="text-gray-500 text-sm">
                  {reviews[currentReview].project}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentReview 
                      ? 'bg-primary scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
