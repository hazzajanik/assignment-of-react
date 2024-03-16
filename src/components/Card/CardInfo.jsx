const CardInfo = ({cardInfo,index,prepareItem}) => {



    const {
        recipe_id,
        recipe_name,
        recipe_image,
        short_description,
        ingredients,
        preparing_time,
        calories,
    } = cardInfo;



  return (
      <tbody className="mb-2">
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              <td><button onClick={()=>{prepareItem(recipe_id)}} className="btn bg-green-500 rounded-3xl">Preparing</button></td>
            </tr>
          </tbody>
  );
};

export default CardInfo;
