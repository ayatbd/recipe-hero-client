/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Container from "../components/Container";
import PagesBanner from "../shared/PagesBanner";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ViewRecife = () => {
  const chef = useLoaderData();
  const { name, description, experience, recipes, likes, picture } = chef;
  console.log(chef.recife_info);

  const [favoriteItems, setFavoriteItems] = useState([]);

  const handleBookmarkClick = (recipeName) => {
    if (favoriteItems.includes(recipeName)) {
      // Remove the item from favorites
      const updatedFavorites = favoriteItems.filter(
        (item) => item !== recipeName
      );
      setFavoriteItems(updatedFavorites);
    } else {
      // Add the item to favorites
      setFavoriteItems([...favoriteItems, recipeName]);
      Swal.fire("Good job!", "The food is added to favourite!", "success");
    }
  };

  return (
    <Container>
      <div className="">
        <PagesBanner></PagesBanner>
        <div className="flex mt-8 justify-between items-center gap-16">
          <img className="w-[700px] h-80 mx-auto" src={picture} />
          <div className="w-3/4 flex-col justify-between items-center mt-5">
            <div className="text-start space-y-5">
              <h2 className="text-5xl font-semibold">{name}</h2>
              <p className="text-xl">{description}</p>
            </div>
            <div className="w-1/2 text-start my-10 space-y-2">
              <p className="text-xl">
                <span className="font-bold mr-2 text-blue-400">Recifes:</span>
                {recipes}
              </p>
              <p className="text-xl">
                <span className="font-bold mr-2 text-blue-400">
                  Experience:
                </span>
                {experience}
              </p>
              <p className="text-xl flex">
                <span className="font-bold mr-2 text-blue-400">
                  <AiFillLike />
                </span>
                {likes}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 my-10">
          {chef.recife_info.map((info) => (
            <div key={info.name} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-center font-bold text-2xl">
                  {info.recipe_name}
                </h2>
                <div>
                  <h4 className="font-bold mt-3">Ingradients</h4>
                  {info.ingredients.map((ingredient) => (
                    <p className="my-2">{ingredient}</p>
                  ))}
                  <p className="font-bold mb-2 mt-4">Cooking method:</p>
                  <p>{info.cooking_method}</p>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <p className="font-bold text-left">Ratings: {info.rating}</p>
                  <button
                    className="text-red-300"
                    onClick={() => handleBookmarkClick(info.recipe_name)}
                  >
                    <MdOutlineFavoriteBorder
                      size={28}
                      color={
                        favoriteItems.includes(info.recipe_name)
                          ? "red"
                          : "inherit"
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ViewRecife;
