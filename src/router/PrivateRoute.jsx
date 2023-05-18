import React, { useContext } from 'react';
import { AuthContext } from '../provider/authProvider/authProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';


const PrivateRoute = ({children}) => {

    const handleAddToFavoriteBtn = ()=>{
        toast('Without a login, you can not visit the single toy details page', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        <Navigate to="/login"></Navigate>
        
      }
    const {user, loading} = useContext(AuthContext);
    if (loading) {
       return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    else{
        return <div className='text-center'>
            
                <h2 onClick={handleAddToFavoriteBtn()}></h2> 
                <ToastContainer></ToastContainer>
                <Login></Login>
                
        </div>
    }
};

export default PrivateRoute;