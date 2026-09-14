import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatIsIt } from "@/components/sections/WhatIsIt";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { WhyInqwiklly } from "@/components/sections/WhyInqwiklly";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full relative">
      <Navbar />
      <Hero />
      <WhatIsIt />
      <HowItWorks />
      <Categories />
      <WhyInqwiklly />
      <ClosingCTA />
    </main>
  );
}
