import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlogs from "@/Components/LatestBlogs";
import Quote from "@/Components/Quote";
import Hero from "@/Components/Header";
import Services from "@/Components/Services";
import OurWork from "@/Components/OurWork";
import About from "@/Components/About";
import { MyFooter } from "@/Components/MyFooter";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <div className=" !overflow-hidden ">
      <Nav />
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Quote />
      <LatestBlogs />
      <GotAQuestion />
      <MyFooter />
    </div>
  );
}
