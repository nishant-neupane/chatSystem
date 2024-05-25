import React from "react";

export default function Login() {
  const handleSubmit = () => {
    console.log("Clicked");
  };
  return (
    <>
      <div className="bg-primary-dark h-screen flex space-x-4">
        <div>
          <h1 className="text-white text-8xl text-center  ">Welcome Back</h1>
        </div>
        <div>
          <form
            action="submit"
            className="text-white outline outline-offset-2 mt-48"
          >
            <h2 className="text-3xl ">Login</h2>
            <label>Glad you are back!</label>
            <input
              className="h-9 w-full  bg-primary-dark placeholder-white outline mt-3 rounded-md mx-3"
              type="text"
              placeholder="  Username"
            />
            <input
              className="h-9 w-full  bg-primary-dark placeholder-white outline mt-3 rounded-md mx-3"
              type="text"
              placeholder="  Password"
            />
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-lite focus:ring-primary-dark border-gray-300 rounded-xl mx-3"
            /><br/>
            <button
              onSubmit={handleSubmit}
              className="bg-primary text-white rounded-md p-1 font-semibold mt-3 w-full "
            >
              Login
            </button>
            <p className="text-center">Forgot Password?</p>
            <p className="text-center">------------------------------------ Or ------------------------------------</p>
          </form>
        </div>
      </div>
    </>
  );
}
