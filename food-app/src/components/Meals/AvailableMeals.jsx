import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import MealItemList from "./MealItemsList";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const prepareMeals = (mealEntries) => {
      setMeals(mealEntries);
    };

    fetchMeals(
      { url: "https://loginappflutterhome.firebaseio.com/meals.json" },
      prepareMeals
    );
  }, [fetchMeals]);

  return (
    <section className={styles.meals}>
      <Card>
        <MealItemList meals={meals} loading={isLoading} error={error} />
      </Card>
    </section>
  );
};

export default AvailableMeals;
