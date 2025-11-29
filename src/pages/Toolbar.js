import React from "react";
import { PAGES } from "../constants";

const Toolbar = () => {
  return (
    <div className="fixed top-4 right-4 p-2 rounded-lg shadow-lg z-50">
      <ul className="flex space-x-4">
        {PAGES.map((page) => (
          <li key={page.id}>
            <a
              href={`#${page.id}`}
              className="text-white hover:text-gray-300 transition-colors duration-300 font-semibold tracking-wider"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toolbar;
