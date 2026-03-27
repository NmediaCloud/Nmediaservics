import React from "react";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <HomeDesktop />
      </div>
      <div className="block md:hidden">
        <HomeMobile />
      </div>
    </>
  );
}
