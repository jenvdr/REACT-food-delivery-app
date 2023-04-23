import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState, useCallback } from 'react';
import useHTTP from '../../hooks/use-http';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const httpData = useHTTP()

  const { isLoading, error, sendRequest: fetchMeals } = httpData;

  useEffect(() => {
    const transformMeals = mealObj => {
      const loadedMeals = [];
      for (const key in mealObj) {
      
        loadedMeals.push({
          id: key,
          description: mealObj[key].description,
          name: mealObj[key].name,
          price: mealObj[key].price
        })
      }
  
      setMeals(loadedMeals);
    };

    fetchMeals(
      {url: 'https://react-food-felivery-app-default-rtdb.europe-west1.firebasedatabase.app/meals.json'}, transformMeals);
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
