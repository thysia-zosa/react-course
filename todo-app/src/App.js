import { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseGoals/CoursInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CoursGoalList/CourseGoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: 1 },
    { text: "Finish the course!", id: 2 },
  ]);
  function addGoalHandler(enteredText) {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredText,
        id: Math.max(...prevGoals.map(goal => goal.id)) + 1,
      });
      return updatedGoals;
    });
  }
  function deleteItemHandler(goalId) {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  }
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goalForm">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
