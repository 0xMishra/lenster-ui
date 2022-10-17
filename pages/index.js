import Intro from "../components/intro";
import Navbar from "../components/navbar";
import Posts from "../components/posts";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
      </div>
      <div className="flex justify-center items-center">
        <Posts />
      </div>
    </>
  );
}
