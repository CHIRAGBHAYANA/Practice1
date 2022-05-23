import React from "react";
import { Link } from "react-router-dom";

const StatusBar = () => {
  return (
    <div className="text-center mt-50">
      <div>
        <Link to="/rank">
          <button data-testid="route-rank" className="outlined" type="button">
            Rank
          </button>
        </Link>
        <Link to="/name">
          <button data-testid="route-name" className="outlined" type="button">
            Name
          </button>
        </Link>
        <Link to="/points">
          <button data-testid="route-points" className="outlined" type="button">
            Points
          </button>
        </Link>
        <Link to="/age">
          <button data-testid="route-age" className="outlined" type="button">
            Age
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StatusBar;
