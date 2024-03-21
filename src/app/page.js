"use client";
import { config } from '@fortawesome/fontawesome-svg-core'
import HeroSection from "@/components/Home/HeroSection";
import Services from '@/components/Home/Services';
import Introduction from '@/components/Home/Introduction';
import Locations from '@/components/Home/Locations';
config.autoAddCss = false

export default function Home() {

  return (
		<>
			<HeroSection />

			<section className='Main | flex flex-col items-center gap-8 px-4 py-8 text-lg lg:text-xl lg:py-24 lg:px-24 lg:gap-16 '>

				<Introduction />
				
				<Services />

				<Locations />
				
			</section>
		</>
  );
}
