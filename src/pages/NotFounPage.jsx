import img10 from "../assets/images/img10.jpg"
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={img10} // Replace with the path to your 404 image
        alt="404 Not Found"
        className="w-96 h-auto mb-8"
      />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">404 Page Not Found</h1>
      <p className="text-gray-600 text-lg">The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;