import AboutUs from "./_sections/AboutUs";
import Contact from "./_sections/Contact";
import DNA from "./_sections/DNA";
import HomeSlider from "./_sections/HomeSlider";
import Projects from "./_sections/Projects";
import Services from "./_sections/Services";
import Sustainability from "./_sections/Sustainability";
import Team from "./_sections/Team";
/* import useEmblaCarousel from 'embla-carousel-react' */

export default function Home() {
  /* const [emblaRef] = useEmblaCarousel() */

  return (
    <>
      <HomeSlider />
      <AboutUs />
      <DNA />
      <Sustainability />
      <Team />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
