import React from 'react';
import Banner from './Banner';
import FoodItems from '../Food/FoodItems';
// import FoodItems from '../Food/FoodItems';

const Home = () => {
    return (
        <div className=' my-16'> 
            <Banner></Banner>
            <FoodItems></FoodItems>
            <h3>hello this is home pages</h3>
        </div>
    );
};

export default Home;