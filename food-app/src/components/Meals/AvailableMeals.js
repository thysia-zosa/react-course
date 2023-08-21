import Card from "../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { DUMMY_MEALS } from "./dummy-meals";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
