import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/authProvider/authProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const {handleRegister, handleGoogleSignIn} = useContext(AuthContext);

    const handleRegisterWithFrom = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL =form.photo.value;
        console.log(name, email, password, photoURL);
        handleRegister(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserData(result.user,name,photoURL)
        })
        .catch(error =>{
          console.log(error);
        })
    }
    const updateUserData = (user,name, photoURL)=>{
      updateProfile(user ,{
        displayName: name, photoURL: photoURL,
      })
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    const handlegoogleLogIn = ()=>{
      handleGoogleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    return (
        <div>
            <div>
            <div className="relative  ">
            <img
              className="w-full h-[600px] object-cover "
              src="https://plus.unsplash.com/premium_photo-1677529864347-c72f82ce929f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <div className="card w-full absolute top-10 left-20 max-w-sm shadow-2xl bg-transparent border-2">
              <div className="card-body">
                <h2 className="text-white text-3xl mb-4  text-center">
                  Please Register
                </h2>
                <form onSubmit={handleRegisterWithFrom}>
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered mb-4"
                    />
                  </div>
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
                      className="input input-bordered mb-4"
                    />
                  </div>
                  
                  <div className="form-control">
                    <input
                      type="url"
                      name="photo"
                      placeholder="Your photoURL"
                      className="input input-bordered mb-0"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-accent"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <div className="text-center">
                  <span className="text-white">Already have an account? </span>
                  <Link to="/login" className="text-blue-600">Please Login</Link>
                </div>
                <div className="form-control mt-2">
                  <button onClick={handlegoogleLogIn} className="btn btn-accent">
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
    );
};

export default Register;