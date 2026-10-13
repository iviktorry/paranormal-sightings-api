import Story from "./Story";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Sightings() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchStories() {
      const response = await fetch("/api");
      setStories(response);
    }

    fetchStories();
  }, [stories]);
  return (
    <div className="flex flex-col gap-2">
      <NavLink className="font-custom text-center font-semibold" to="/">
        From the Other Side
      </NavLink>
      <h1 className="font-custom text-center text-4xl">Sightings</h1>
      <div className="grid items-center justify-center gap-4">
        {/* {stories.map((story) => (
          <Story key={story.title} />
        ))} */}
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
}
