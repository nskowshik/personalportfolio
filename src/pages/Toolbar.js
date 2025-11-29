import React, { useState } from "react";
import { PAGES } from "../constants";

const Toolbar = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="fixed top-4 right-4 p-2 rounded-lg shadow-lg z-50">
      <ul className="flex space-x-4">
        {PAGES.map((page) => (
          <li key={page.id}>
            <a
              href={`#${page.id}`}
              onMouseEnter={() => setHoveredId(page.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.25rem',
                color: 'white',
                fontWeight: '600',
                opacity: hoveredId === page.id ? 1 : 0.3,
                color: hoveredId === page.id ? 'cyan' : 'white',
                transition: 'all 0.3s ease'
              }}
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
