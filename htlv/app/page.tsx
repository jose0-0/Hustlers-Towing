import Image from "next/image";
import { Hero, StatsStrip, About, Services } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Services />
    </>
  );
}
