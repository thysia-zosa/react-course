import MealItem from "./MealItem/MealItem";

const MealItemList = ({ meals, loading, error }) => {
  let mealList = <h2>Sorry, no meals are available.</h2>;

  if (meals.length > 0) {
    mealList = (
      <ul>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    );
  }

  let content = mealList;

  if (error) {
    content = (
      <h2>
        An error occurred while fetching the meals. We appologize for your
        inconveniences.
      </h2>
    );
  }

  if (loading) {
    content = <h2>Loading meals...</h2>;
  }

  return (content);
};

export default MealItemList;
