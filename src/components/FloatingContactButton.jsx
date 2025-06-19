const FloatingContactButton = ({ onClick }) => {  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 z-50 flex items-center space-x-2"
      aria-label="Get Free Estimate"
    >
      {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg> */}
      <span className="font-medium whitespace-nowrap">Free Estimate</span>
    </button>
  );
};

export default FloatingContactButton;
