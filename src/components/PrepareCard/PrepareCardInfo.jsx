import React from 'react';

const PrepareCardInfo = ({preparecardInfo,index}) => {
    const {
        recipe_id,
        recipe_name,
        recipe_image,
        short_description,
        ingredients,
        preparing_time,
        calories,
    } = preparecardInfo;

    return (
        <tbody className="mb-2">
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          </tbody>
    );
};

export default PrepareCardInfo;