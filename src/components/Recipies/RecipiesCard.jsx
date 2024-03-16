/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const RecipiesCard = ({ recipie,hundleBtn }) => {
    const {
        recipe_id,
        recipe_name,
        recipe_image,
        short_description,
        ingredients,
        preparing_time,
        calories,
    } = recipie;


        

    return (
        <div>
            <div className="card md:w-full md:h-full bg-base-100 shadow-xl ">
                <figure className="px-2 ">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <div>
                        <h4>Ingredients:{ingredients.length}</h4>
                      
                            <li>{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li>{ingredients[2]}</li>
                            <li>{ingredients[3]}</li>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <img src="https://i.postimg.cc/Vvy9N980/Frame.png" alt="" />
                            <p>30 minutes</p>
                        </div>

                        <div className="flex items-center gap-1">
                        <img src="https://i.postimg.cc/CxtRYhYz/Frame-1.png" alt="" />
                        <p>600 calories</p>

                        </div>
                    </div>
                    <div>
                        <button onClick={()=>{hundleBtn(recipe_id)}} className="btn rounded-3xl bg-green-500">
                            Want to Cook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipiesCard;
