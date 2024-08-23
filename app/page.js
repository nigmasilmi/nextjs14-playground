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
          <h1>Next level food</h1>
          <p>Test and share</p>
          <div className={classes.cta}>
            <Link href="/meals">Meals</Link>
            <Link href="/community">Community</Link>
          </div>
        </div>
      </header>
    </>
  );
}
