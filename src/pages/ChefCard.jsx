import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const { _id, name, picture, experience, likes, recipes } = chef;
  return (
    <div>
      <div className="bg-white rounded shadow p-4">
        <LazyLoad height={200} once>
          <img
            src={picture}
            alt={chef.name}
            className="w-full h-52 mb-4 rounded"
          />
        </LazyLoad>
        <h3 className="text-lg font-semibold my-2">{name}</h3>
        <p className="mb-2">Years of experience: {experience}</p>
        <p className="mb-2">Number of recipes: {recipes}</p>
        <p className="mb-2">Likes: {likes}</p>
        <Link
          to={`chefs/${_id}`}
          className="btn bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
