"use client";
import React from "react";
import logoImg from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathName = usePathname();
  console.log(pathName);

  const getLinkClassName = (href) => {
    if (pathName.startsWith(href)) {
      return classes.active;
    } else {
      return undefined;
    }
  };

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/">
          <div className={classes.logo}>
            <Image src={logoImg} alt="A plate with food" />
            NextLevel Food
          </div>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className={getLinkClassName("/meals")}>
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={getLinkClassName("/community")}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
