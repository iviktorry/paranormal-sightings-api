import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-40 text-center lg:gap-50">
      <h1 className="font-custom text-4xl">404 - You've been ghosted 👻</h1>
      <NavLink
        className="font-custom text-center text-3xl font-semibold"
        to="/"
      >
        Back to the main page
      </NavLink>
    </div>
  );
}
