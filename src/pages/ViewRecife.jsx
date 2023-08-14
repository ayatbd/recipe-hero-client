/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

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
    <div className="mt-12">
      <img className="w-[700px] h-80 mx-auto" src={picture} />
      <div className="flex justify-between items-center mt-5">
        <div className="w-1/2 text-start">
          <p>
            <span className="font-bold mr-2">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold mr-2">Experience:</span> {experience}
          </p>
          <p>
            <span className="font-bold mr-2">Likes:</span> {likes}{" "}
          </p>
        </div>
        <div className="w-1/2 text-start">
          <p>
            <span className="font-bold mr-2">Recifes:</span> {recipes}{" "}
          </p>
          <p>
            <span className="font-bold mr-2">Description:</span> {description}{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {chef.recife_info.map((info) => (
          <div key={info.name} className="card w-96 bg-base-100 shadow-xl">
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
                  <FaBookmark
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
  );
};

export default ViewRecife;
