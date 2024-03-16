import { useState } from "react";
import { useEffect } from "react";
import RecipiesCard from "./RecipiesCard";
import Card from "../Card/Card";
import toast, { Toaster } from "react-hot-toast";
import PrepareCard from "../PrepareCard/PrepareCard";

const Recipies = () => {
  const [recipies, setRecipies] = useState([]);
  const [card, setCard] = useState([]);
  const [prepareArr,setPrepareArr] = useState([]);



  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);

  const hundleBtn = (id) => {
    const seletedRecipie = recipies.find(
      (hundleRecipe) => hundleRecipe.recipe_id === id
    );

    const unipueItem = card.find((x) => x.recipe_id === id);
    if (!unipueItem) {
      setCard([...card, seletedRecipie]);
      toast.success("Successfully Added!");
    } else {
      toast.error("Already Selected");
    }
  };

  const prepareItem = (id) =>{
    const uniquePrepareItem =  card.find(x => x.recipe_id === id);
    setPrepareArr([...prepareArr,uniquePrepareItem]);
    const unipueItem = card.filter(x => x.recipe_id !== id);
    setCard(unipueItem);
    toast.success("The Food is Prepare!")
  }

  return (
    <div>
      <div className="text-center my-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-4">Our Recipes</h1>
        <p className="my-5">
        Many recipes websites feature curated collections of recipes grouped by themes, seasons, holidays, or special occasions.
        </p>
      </div>
      <div className="lg:flex gap-5">
        <div className="flex-1">
          <div className="grid md:grid-cols-2 gap-3 my-3">
            {recipies.map((recipie) => (
              <RecipiesCard
                key={recipie.recipe_id}
                hundleBtn={hundleBtn}
                recipie={recipie}
              ></RecipiesCard>
            ))}
          </div>
        </div>
        <div className="flex-1">



          <h1 className="text-center font-bold text-2xl">
            Want to Cook : 0{card.length}{" "}
          </h1>

          <hr className="mx-40 border-[1px] my-4" />

          <Card prepareItem={prepareItem} card={card} key={card.recipe_id}></Card>

          <div>
            <h1 className="text-center font-bold text-2xl my-4">
              Currently cooking: 0{prepareArr.length}
            </h1>
            <hr className="mx-40 border-[1px] my-4" />
            <PrepareCard prepareArr={prepareArr} key={prepareArr.recipe_id}></PrepareCard>
          </div>

        </div>
      </div>

      <div>
        <Toaster />
      </div>

    </div>
  );
};

export default Recipies;
