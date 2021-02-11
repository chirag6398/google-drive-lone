import React from "react";
import "../styles/homescreen.css";
import Header from "./header";
import LeftSidebar from "./LeftSidebar";

export default function HomeScreen() {
  return (
    <div className="container">
      <div className="home__header">
        <Header />
      </div>

      <div className="home__maincontainer">
        <div className="home__leftsidebar">
          <LeftSidebar />
        </div>
        <div className="home__remainingpart">
          <hi>files</hi>
        </div>
      </div>
    </div>
  );
}
