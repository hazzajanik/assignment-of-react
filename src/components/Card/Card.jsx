import CardInfo from "./CardInfo";

const Card = ({ card,prepareItem }) => {

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
          
          {card.map((cardInfo,index) => (
            <CardInfo prepareItem={prepareItem} cardInfo={cardInfo} key={cardInfo.recipe_id} index={index}></CardInfo>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Card;
