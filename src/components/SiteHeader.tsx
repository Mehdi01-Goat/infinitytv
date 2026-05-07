import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

export default function SiteHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <Navbar />
    </div>
  );
}
