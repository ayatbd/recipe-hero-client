
const portfolios = [
  {
    id: 1,
    image: 'https://i.ibb.co/7zPmk87/img6.jpg',
    title: 'Food 1',
    description: 'Super chineese special meat curry',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/CHc1V8b/img4.jpg',
    title: 'Food 2',
    description: 'Super chineese special meat curry',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/7zPmk87/img6.jpg',
    title: 'Food 3',
    description: 'Super chineese special meat curry',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/CHc1V8b/img4.jpg',
    title: 'Food 4',
    description: 'Super chineese special meat curry',
  },
];

const RecifeGallery = () => {
  return (
    <section className="py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="font-bold text-3xl text-center mb-7">Recife Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="bg-white rounded-lg shadow-md">
              <img src={portfolio.image} alt={portfolio.title} className="w-full h-48 object-cover rounded-t-lg" />
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

export default RecifeGallery;
