import React from 'react';
import Banner from './Banner';
import FoodItems from '../Food/FoodItems';
// import FoodItems from '../Food/FoodItems';

const Home = () => {
    return (
        <div className=' my-16'> 
            <Banner></Banner>
            <FoodItems></FoodItems>
        </div>
    );
};

export default Home;