import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-40 text-center lg:gap-50">
      <NavLink
        className="font-custom text-center text-4xl font-semibold"
        to="/"
      >
        From the Other Side
      </NavLink>
      <h1 className="font-custom text-3xl">
        The online home of paranormal sightings
      </h1>
    </div>
  );
}
