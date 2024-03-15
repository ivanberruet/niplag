"use client";
import { config } from '@fortawesome/fontawesome-svg-core'
import HeroSection from "@/components/Home/HeroSection";
config.autoAddCss = false

export default function Home() {

  return (
		<>
			<HeroSection />

			<section className="h-[500px]"></section>
		</>
  );
}
