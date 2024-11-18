import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
export default function Home(){
  return(
    <div className="bg-[#252B42] w-[1440px] h-[1132px] top[-590px] left[-720px]">
      <Navbar/>
      <Hero/>
    </div>
  );
}
