import img6 from "../assets/images/img6.jpg"
const portfolios = [
  {
    id: 1,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2F153902699851115%2F&psig=AOvVaw0H5cSrydW5mhGw9LVCAQm4&ust=1685113231394000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJi-64nekP8CFQAAAAAdAAAAABAE',
    title: 'Food 1',
    description: 'Super chineese special meat curry',
  },
  {
    id: 2,
    image: 'portfolio2.jpg',
    title: 'Food 2',
    description: 'Super chineese special meat curry',
  },
  {
    id: 3,
    image: 'portfolio3.jpg',
    title: 'Food 3',
    description: 'Super chineese special meat curry',
  },
  {
    id: 4,
    image: 'portfolio4.jpg',
    title: 'Food 4',
    description: 'Super chineese special meat curry',
  },
];

const Portfolio = () => {
  return (
    <section className="py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Food Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="bg-white rounded-lg shadow-md">
              <img src={img6} alt={portfolio.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{portfolio.title}</h3>
                <p className="text-gray-600">{portfolio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
