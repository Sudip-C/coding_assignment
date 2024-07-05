// ShimmerCard.tsx

import React from 'react';
import '../css/Shimmer.css'; // Import the CSS file for shimmer effect

const ShimmerCard: React.FC = () => {

  return (
    
      <div className="shimmer-cards">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="shimmer-card" key={index}>
            <div className="shimmer-card-image shimmer"></div>
            <div className="shimmer-card-content">
              <div className="shimmer-card-title shimmer"></div>
              <div className="shimmer-card-price shimmer"></div>
              <div className="shimmer-card-description shimmer"></div>
            </div>
          </div>
          ))}
        </div>
    
  );
};

export default ShimmerCard;
