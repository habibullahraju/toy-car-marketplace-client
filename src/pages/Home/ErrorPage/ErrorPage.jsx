import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full object-cover' src="https://cdn.optinmonster.com/wp-content/uploads/2021/07/404-page-examples-fb-image.png" alt="" />
                <Link to="/" className='btn btn-outline hover:bg-blue-950 absolute bottom-32 left-20 text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;