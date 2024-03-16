import { useState, useEffect } from "react";
import PrepareCardInfo from "./PrepareCardInfo";

const PrepareCard = ({ prepareArr }) => {
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    let totalTime = 0;
    let totalCalories = 0;

    prepareArr.forEach((recipe) => {

      const preparingTime = parseInt(recipe.preparing_time.split(" ")[0]);
      totalTime += preparingTime;


      const calories = parseInt(recipe.calories.split(" ")[0]);
      totalCalories += calories;
    });


    setTotalTime(totalTime);
    setTotalCalories(totalCalories);
  }, [prepareArr]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {prepareArr.map((preparecardInfo, index) => (
            <PrepareCardInfo
              preparecardInfo={preparecardInfo}
              key={preparecardInfo.recipe_id}
              index={index}
            ></PrepareCardInfo>
          ))}
        </table>
        <div className="font-bold text-center mt-7">
          <h1>Total Time = {totalTime} Minutes </h1>
          <h1>Total Ricipie = {totalCalories} Calories </h1>
        </div>
      </div>
    </div>
  );
};

export default PrepareCard;
