import React from "react";
import UserList from "../components/UserList";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <UserList />
      <p>Welcome to the MERN Stack Project!</p>
    </div>
  );
}

export default Home;
