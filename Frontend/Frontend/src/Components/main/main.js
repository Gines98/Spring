import React from "react";

import ResponsiveAppBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";
import UserPostBoard from "../UserPostBoard/UserPostBoard";
export default function Main() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>

      <UserPostBoard></UserPostBoard>

      <Footer></Footer>
    </div>
  );
}
