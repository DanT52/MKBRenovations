import { useState, useEffect } from 'react';
// Kitchen images
import Kitchen1 from '/img/showcase/kitchen/IMG_4930.jpg';
import Kitchen2 from '/img/showcase/kitchen/IMG_4931.JPG';
import Kitchen3 from '/img/showcase/kitchen/IMG_1186.jpg';
import Kitchen4 from '/img/showcase/kitchen/IMG_1201(1).jpg';
import Kitchen5 from '/img/showcase/kitchen/IMG_1202.jpg';
import Kitchen6 from '/img/showcase/kitchen/IMG_2368(1).jpg';
import Kitchen7 from '/img/showcase/kitchen/IMG_2382(1).jpg';
import Kitchen8 from '/img/showcase/kitchen/IMG_3220.jpg';
import Kitchen9 from '/img/showcase/kitchen/IMG_8980.jpg';
import Kitchen10 from '/img/showcase/kitchen/IMG_8982.jpg';
// Bathroom images
import Bathroom1 from '/img/showcase/Bathroom/IMG_3542.JPG';
import Bathroom2 from '/img/showcase/Bathroom/IMG_3986.jpg';
import Bathroom3 from '/img/showcase/Bathroom/IMG_4919.JPG';
import Bathroom4 from '/img/showcase/Bathroom/IMG_4921.JPG';
import Bathroom5 from '/img/showcase/Bathroom/IMG_8015.JPG';

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all'); // 'all', 'kitchen', 'bathroom'
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  // Sample images from the showcase folder
  const images = [
    // Kitchen images
    {
      src: Kitchen1,
      alt: 'Modern Kitchen Renovation',
      category: 'Kitchen'
    },
    {
      src: Kitchen2,
      alt: 'Kitchen Design',
      category: 'Kitchen'
    },
    {
      src: Kitchen3,
      alt: 'Kitchen Remodel',
      category: 'Kitchen'
    },
    {
      src: Kitchen4,
      alt: 'Custom Kitchen Cabinets',
      category: 'Kitchen'
    },
    {
      src: Kitchen5,
      alt: 'Modern Kitchen Island',
      category: 'Kitchen'
    },
    {
      src: Kitchen6,
      alt: 'Kitchen Countertops',
      category: 'Kitchen'
    },
    {
      src: Kitchen7,
      alt: 'Kitchen Backsplash',
      category: 'Kitchen'
    },
    {
      src: Kitchen8,
      alt: 'Contemporary Kitchen',
      category: 'Kitchen'
    },
    {
      src: Kitchen9,
      alt: 'Kitchen Lighting',
      category: 'Kitchen'
    },
    {
      src: Kitchen10,
      alt: 'Kitchen Appliances',
      category: 'Kitchen'
    },
    // Bathroom images
    {
      src: Bathroom1,
      alt: 'Bathroom Remodel',
      category: 'Bathroom'
    },
    {
      src: Bathroom2,
      alt: 'Modern Bathroom Vanity',
      category: 'Bathroom'
    },
    {
      src: Bathroom3,
      alt: 'Modern Bathroom',
      category: 'Bathroom'
    },
    {
      src: Bathroom4,
      alt: 'Luxury Bathroom',
      category: 'Bathroom'
    },
    {
      src: Bathroom5,
      alt: 'Bathroom Design',
      category: 'Bathroom'
    }  ];

  // Filter images based on selected category
  const filteredImages = filter === 'all' ? images : images.filter(img => img.category.toLowerCase() === filter);  // Auto-advance carousel
  useEffect(() => {
    const interval = isUserInteracting ? 20000 : 5000; // 20 seconds after user interaction, 5 seconds normally
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
      );
      // Reset user interaction flag after auto-advance
      if (isUserInteracting) {
        setIsUserInteracting(false);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [filteredImages.length, isUserInteracting]);  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    );
    setIsUserInteracting(true);
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1
    );
    setIsUserInteracting(true);
  };
  
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
    setIsUserInteracting(true);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentImageIndex(0); // Reset to first image when filter changes
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take a look at some of our recent kitchen and bathroom renovation projects 
            that showcase our attention to detail and quality craftsmanship.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-secondary'
              }`}
            >
              All Projects ({images.length})
            </button>
            <button
              onClick={() => handleFilterChange('kitchen')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'kitchen' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-secondary'
              }`}
            >
              Kitchens ({images.filter(img => img.category === 'Kitchen').length})
            </button>
            <button
              onClick={() => handleFilterChange('bathroom')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'bathroom' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-secondary'
              }`}
            >
              Bathrooms ({images.filter(img => img.category === 'Bathroom').length})
            </button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="w-full h-full object-cover"
            />
              {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {filteredImages[currentImageIndex]?.category}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'ring-4 ring-primary scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
