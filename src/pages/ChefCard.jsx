
const ChefCard = ( {chef} ) => {
    const {id, name, picture, experience, likes, recipes, description } = chef;
    return (
        <div>
            <div className="bg-white rounded shadow p-4" key={id}>
              <img src={picture} alt={chef.name} className="w-full h-52 mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <p className="mb-2">Years of experience: {experience}</p>
              <p className="mb-2">Number of recipes: {recipes}</p>
              <p className="mb-2">Likes: {likes}</p>
              <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                View Recipes
              </button>
            </div>
        </div>
    );
};

export default ChefCard;