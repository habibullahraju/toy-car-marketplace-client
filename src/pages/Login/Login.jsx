import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <div>
      <div>
        <div className="">
          <div className="relative">
            <img
              className="w-full h-[600px] object-cover "
              src="https://plus.unsplash.com/premium_photo-1677529864347-c72f82ce929f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <div className="card w-full absolute top-20 left-20 max-w-sm shadow-2xl bg-transparent border-2">
              <div className="card-body">
                <h2 className="text-white text-3xl mb-4  text-center">
                  Please Login
                </h2>
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="input input-bordered mb-4"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-accent"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                <div className="text-center">
                  <span className="text-white">Are your new here? </span>
                  <Link to="/register" className="text-blue-600">Please Register</Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
