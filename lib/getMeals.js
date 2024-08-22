import sql from "better-sqlite3";
const db = sql("meals.db");

// .prepare does not return a promise but
// it is simulated here for learning purposes
export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
};
