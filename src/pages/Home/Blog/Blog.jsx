import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2 className='text-4xl text-center mt-3 mb-2 font-bold'>I have answered some beatiful questions below</h2>
            <hr className=' mx-auto mt-2 w-[80%]' />
            <div className='grid md:grid-cols-2 gap-6 m-7'>
                <div>
                    <h2 className='text-xl font-semibold mb-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.There are two common ways to store your tokens. The first is in localStorage and the second is in cookies. There is a lot of debate over which one is better with most people leaning toward cookies as they are more secure.</p>
                </div>
                <div>
                    <h2  className='text-xl font-semibold mb-2'>Compare SQL and NoSQL databases?</h2>
                    <p>SQL databases use a structured query language and have a defined schema. NoSQL databases use dynamic schemas for unstructured data. NoSQL databases scale horizontally, whereas SQL databases scale vertically. Whereas SQL databases are table-based, NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-2'>What is express js? What is Nest JS?</h2>
                    <p>Express.js is a node.js web framework used for the back-end web applications and web pages.and NestJS is a progressive NodeJS server-side framework that uses TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming) to facilitate the creation of scalable and efficient applications.</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-2'>What is MongoDB aggregate and how does it work?</h2>
                    <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.As with many other database systems, MongoDB allows you to perform a variety of aggregation operations. These allow you to process data records in a variety of ways, such as grouping data, sorting data into a specific order, or restructuring returned documents, as well as filtering data as one might with a query</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;