// import Header from "@/Components/Header";
import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlog from "@/Components/LatestBlog";
import { Myfooter } from "@/Components/Myfooter";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <LatestBlog />
      <GotAQuestion />
      <Myfooter />
    </>
  );
}
