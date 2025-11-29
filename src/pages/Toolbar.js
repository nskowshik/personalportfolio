import React from 'react';

const Toolbar = () => {
  const pages = ['Intro', 'Careers', 'Footer'];

  return (
    <div className="fixed top-4 right-4 p-2 rounded-lg shadow-lg">
      <ul className="flex space-x-4">
        {pages.map(page => (
          <li key={page}>
            <a 
              href={`#${page.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition-colors duration-300 font-semibold tracking-wider"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toolbar;
