import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlogs from "@/Components/LatestBlogs";
import Quote from "@/Components/Quote";
import { MyFooter, Myfooter } from "@/Components/Myfooter";
import Hero from "@/Components/Header";
import Services from "@/Components/Services";
import Sidebar from "@/Components/Nav";
import OurWork from "@/Components/OurWork";
import About from "@/Components/About";

export default function Home() {
  return (
    <div className=" !overflow-hidden">
      <Sidebar/>
      <Hero/>
      <About/>
      <Services/>
      <OurWork/>
      <Quote />
      <LatestBlogs />
      <GotAQuestion />
      <MyFooter />
    </div>
  )
}

