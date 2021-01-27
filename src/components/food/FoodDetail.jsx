import React from "react";
import { useParams, Link } from "react-router-dom";
import foods from "../../data/foods.json";

function FoodDetail(props) {
  const params = useParams();
  const { foodID } = params;
  const food = foods.results
    .filter((item) => item.id === Number(foodID))
    .map((item) => (
      <div className="mt-3 mb-3" key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.detail}</p>
        <img src={item.img} />
      </div>
    ));
  return <>{food}</>;
}
export default FoodDetail;
