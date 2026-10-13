import { useState } from "react";

export default function Story() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="max-w-xs justify-self-center rounded-md bg-white p-4 text-black lg:max-w-md">
      <p className="text-xs text-neutral-800">7 Jan 2025 at 9:30? Exeter, UK</p>
      <h2 className="my-1 text-lg font-bold">The phantom warning</h2>
      <div className="relative">
        <p className={`${isOpen ? "h-full" : "h-40 lg:h-30"} overflow-hidden`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          illum saepe quidem tenetur, inventore maxime nulla, repudiandae non
          suscipit rerum doloremque aliquam omnis explicabo, eius obcaecati qui.
          Ex, pariatur nisi? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Temporibus illum saepe quidem tenetur, inventore maxime nulla,
          repudiandae non suscipit rerum doloremque aliquam omnis explicabo,
          eius obcaecati qui. Ex, pariatur nisi?
        </p>
        <div
          className={`${isOpen ? "" : "pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-linear-to-t from-white via-white/80 to-transparent"}`}
        ></div>
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mt-4 w-full text-right"
      >
        Read in full
      </button>
    </article>
  );
}
