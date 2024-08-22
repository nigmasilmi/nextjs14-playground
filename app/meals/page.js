import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/getMeals";

// server components can be converted in async functions
const MealsPage = async () => {
  // notice that there is no need to use useEffect or fetch
  // check reference in dev notes for more details
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Dealicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and go for it</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share it</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
