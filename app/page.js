import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div className={classes.hero}>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Time to get started!
          </h1>
          <p>Test and share</p>
        </div>
        <div className={classes.cta}>
          <p>
            <Link href="/meals">Meals</Link>
          </p>
          <p>
            <Link href="/meals">Meals</Link>
          </p>
          <p>
            <Link href="/community">Community</Link>
          </p>
        </div>
      </header>
    </>
  );
}
