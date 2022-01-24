import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "Types";

interface IProps {
  pd: MenuItem;
}

const FoodMenuCard = ({ pd }: IProps) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-5">
      <Link to={pd.path}>
        <img className="img-fluid w-75" src={pd.image} alt="" />
        <p>
          <Link to={pd.path} className="text-secondary">
            {pd.title}
          </Link>
        </p>
      </Link>
    </div>
  );
};

export default FoodMenuCard;
