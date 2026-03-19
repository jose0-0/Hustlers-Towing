import {
  Hero,
  StatsStrip,
  About,
  Services,
  Why,
  Reviews,
  Request,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Services />
      <Why />
      {/* <Reviews /> */}
      <Request />
    </>
  );
}
