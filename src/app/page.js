// import Header from "@/Components/Header";
import GotAQuestion from "@/Components/GotAQuestion";
import LatestBlogs from "@/Components/LatestBlogs";
import { MyFooter } from "@/Components/MyFooter";
import OurWork from "@/Components/OurWork";
// import Nav from "@/Components/Nav";
import Quote from "@/Components/Quote";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Header /> */}
      <OurWork />
      <Quote />
      <LatestBlogs />
      <GotAQuestion />
      <MyFooter />
    </>
  );
}
