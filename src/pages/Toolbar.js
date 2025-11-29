import React from "react";
import { PAGES } from "../constants";

const Toolbar = () => {
  return (
    <div className="fixed top-4 right-4 p-2 rounded-lg shadow-lg z-50 bg-gray-900 opacity-50 hover:opacity-100 transition-opacity duration-300">
      <ul className="flex space-x-4">
        {PAGES.map((page) => (
          <li key={page.id}>
            <a
              href={`#${page.id}`}
              className="text-white font-semibold"
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
