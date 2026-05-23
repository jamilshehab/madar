import Image from "next/image";
import Slider from "./components/common/Slider/Slider";
import AboutPage from "./components/common/About/About";

export default function Home() {
  return (
    <main>
      <Slider />
      <AboutPage />
    </main>
  );
}
