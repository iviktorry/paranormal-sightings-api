import Story from "./Story";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Sightings() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await fetch("http://localhost:7000/api");
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStories();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <NavLink
        className="font-custom text-center text-base font-semibold"
        to="/"
      >
        From the Other Side
      </NavLink>
      <h1 className="font-custom text-center text-4xl">Sightings</h1>
      <div className="grid items-center justify-center gap-4">
        {stories.map((story) => (
          <Story
            key={story.uuid}
            location={story.location}
            timeStamp={story.timeStamp}
            title={story.title}
            text={story.text}
          />
        ))}
      </div>
    </div>
  );
}
