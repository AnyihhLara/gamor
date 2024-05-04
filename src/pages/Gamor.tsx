import CategorySection from "../core/components/CategorySection/CategorySection";
import MainBoard from "../core/components/MainBoard/MainBoard";
import Navbar from "../template/Navbar/Navbar";

export default function GamorPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <MainBoard />
        <CategorySection />
      </div>
    </>
  );
}
