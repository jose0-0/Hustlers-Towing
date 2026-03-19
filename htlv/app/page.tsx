import Image from "next/image";
import { Hero, StatsStrip, About } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
    </>
  );
}
