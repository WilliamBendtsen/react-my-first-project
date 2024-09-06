import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Create</NavLink>
      {/*  <NavLink to="/extra">Extra Page</NavLink> */}
    </nav>
  );
}
