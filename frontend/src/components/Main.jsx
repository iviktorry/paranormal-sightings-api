import Home from "./Home";
import NotFound from "./NotFound";
import Read from "./Read";
import { Routes, Route } from "react-router";
import UploadSighting from "./UploadSighting";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sightings" element={<Read />} />
        <Route path="/upload-sighting" element={<UploadSighting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
