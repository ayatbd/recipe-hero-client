import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    setSuccess("");

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
        setError("");
        setSuccess("User has created successfully");
        form.reset();
        updateUserData(result.user, name, photo)
      })
      .catch((error) =>{
        console.log(error)
        setError(error.message)
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
    .then(() => {
      console.log("user name updated")
    })
    .catch(error => {
      setError(error.message)
    });
  }
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>

      <form onSubmit={handleRegister} className="md:w-1/3 max-w-sm">
        <div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Register
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="photo"
            required
            placeholder="Photo URL"
          />
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
             Dont have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:underline hover:underline-offset-4"
            >
              Login
            </Link>
          </div>
        </div>
        <p className="mt-4 text-start text-orange-600">{error}</p>
        <p className="mt-4 text-start text-green-600">{success}</p>
      </form>
      
    </section>
  );
};

export default Register;
