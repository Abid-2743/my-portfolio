import React from 'react';

function Loader({ isDarkMode }) {
  return (
    <section
      className={`flex justify-center items-center h-screen ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="relative">
        {/* Animated "A" with a vibrant multi-color gradient */}
        <span
          className={`text-9xl font-extrabold text-transparent bg-clip-text ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 to-yellow-500'
              : 'bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 to-yellow-500'
          } animate__animated animate__fadeIn animate__delay-1s`}
        >
          A
        </span>

        {/* Rotating Circle with extra gradient colors */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className={`w-64 h-64 border-8 border-t-8 ${
              isDarkMode
                ? 'border-white'
                : 'border-gradient-to-r from-blue-500 via-purple-500 via-red-500 to-yellow-500'
            } rounded-full animate-spin ring-4 ring-opacity-50 ring-white`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
