import Header from "@/Components/Header";
// import { Myfooter } from "@/Components/Myfooter";
import Nav from "@/Components/Nav";
import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlogs from "@/Components/LatestBlogs";
import Quote from "@/Components/Quote";
import { Myfooter } from "@/Components/Myfooter";

export default function Home() {
  return (
    <div className=" !overflow-hidden">
      {/* <Nav /> */}
      <Header/>
      <Quote />
      <LatestBlogs />
      <GotAQuestion />
      <Myfooter />
    </div>
  );
}
