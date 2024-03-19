// import Header from "@/Components/Header";
import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlogs from "@/Components/LatestBlogs";
import { Myfooter } from "@/Components/MyFooter";
import Nav from "@/Components/Nav";
import Quote from "@/Components/Quote";

export default function Home() {
  return (
    <>
      <Nav />
      <Quote />
      <LatestBlogs />
      <GotAQuestion />
      <Myfooter />
    </>
  );
}
