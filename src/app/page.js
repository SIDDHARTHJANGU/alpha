// import { Myfooter } from "@/Components/Myfooter";
import Nav from "@/Components/Nav";
import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlogs from "@/Components/LatestBlogs";
import Quote from "@/Components/Quote";
import { Myfooter } from "@/Components/Myfooter";
import Hero from "@/Components/Header";
import Services from "@/Components/Services";
import Sidebar from "@/Components/Nav";

export default function Home() {
  return (
    <div className=" !overflow-hidden">
      {/* <Nav /> */}
      <Sidebar/>
      <Hero/>
      <Services/>
      <Quote />
      <LatestBlogs />
      <GotAQuestion />
      <Myfooter />
    </div>
  );
}
