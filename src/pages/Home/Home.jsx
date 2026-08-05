import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Home/Hero";

export default function Home() {
  const { hero } = useOutletContext();
  return <Hero hero={hero} />;
}
