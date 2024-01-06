import React, { useEffect, useState } from 'react';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      const data = await response.json();

      // Extracting the 'Items' array from the response
      const items = data.Items;

      // Updating the state with the items
      setFoodItems(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    };
    
    fetchData();
}, []);
console.log(foodItems)

  const popularItems = foodItems.filter((item) => item.IsRecommended);
    return (
        <div>
            {
                popularItems.map(item => <div key={item.id}>
                    <h2>{item.Name}</h2>
                </div>)
            }
        {/* {
                foodItems.map(item => <div key={item.id}>
                    <h3>{ item.Name }</h3>
                </div>)
       } */}

        {/* Render your UI using 'foodItems' */}
       
      </div>
    );
};

export default FoodItems;