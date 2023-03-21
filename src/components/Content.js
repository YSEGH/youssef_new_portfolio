import React, { useEffect } from "react";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Morph from "./Morph";

export default function Content({ route }) {
  const displayComponent = () => {
    switch (route) {
      case "/about":
        return <About />;
      case "/work":
        return <Work />;
      case "/contact":
        return <Contact />;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(route);
    return () => {};
  }, [route]);

  return (
    <div className="component__content">
      {/*       <Morph />
       */}{" "}
      {displayComponent()}
    </div>
  );
}
