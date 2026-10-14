import { NavLink } from "react-router";
import candleImg from "/images/candle-logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-2">
      <img src={candleImg} alt="Logo" className="h-12" />
      <nav id="main-navigation">
        <ul role="list" className="flex gap-4">
          <li role="listitem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li role="listitem">
            <NavLink to="/sightings">Read</NavLink>
          </li>
          <li role="listitem">
            <NavLink to="/upload-sighting">Upload</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
