import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import bg from "/bg.png";
import Player from "../Player.jsx";

export default function Layout() {
  return (
    <div
      className="bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Player />
      <Navbar />
      <Outlet />
    </div>
  );
}
