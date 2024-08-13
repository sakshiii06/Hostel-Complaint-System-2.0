import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("https://hostel-complaint-system-2-0.onrender.com/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (data.jwtToken) {
        localStorage.setItem("jwtToken", data.jwtToken);
        navigate("/");
      } else {
        alert("Invalid credentials. Please check your email and password.");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div
        className="flex min-h-screen w-screen items-center justify-center text-gray-800"
        style={{
          backgroundImage:
            "url('https://www.sgsits.ac.in/images/speasyimagegallery/albums/10/images/mainporchphoto.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay"></div>
          <div className="relative flex flex-col rounded-lg border border-gray-200 bg-white shadow-xl p-8">
            <div className="flex-auto">
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXDsUvi7805UGAhS02Sr-Nk8fiFHG3FKMkQ&s"
                  alt="College Logo"
                  className="h-24 w-24 rounded-full object-contain"
                />
              </div>
              <div className="mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold tracking-tight text-blue-600">
                  Login
                </span>
              </div>
              <h4 className="mb-2 text-center font-medium text-gray-700 text-lg">
                Welcome Back!
              </h4>
              <p className="mb-6 text-center text-gray-500">
                Sign in to access your account
              </p>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                    id="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className="w-full rounded-md bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

